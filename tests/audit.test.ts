import { describe, expect, it } from 'vitest';
import { buildOutline, outlineLines, toMarkdownList, type OutlineOptions } from '../src/outline';
import { fakeSource } from './scan';
import { GROWTH_LIMIT, pairedRatio } from './growth';

const PRO: OutlineOptions = { callouts: true, listHeadings: true, maxDepth: 5, words: true, broken: true };
const FREE: OutlineOptions = { callouts: true, listHeadings: true, maxDepth: 1, words: false, broken: false };

describe('audit fixes', () => {
	it('word counts stay bounded when many notes embed each other', () => {
		const sourceOf = (n: number) => {
			const files: Record<string, string> = {};
			for (let i = 0; i < n; i++) {
				const body: string[] = [];
				for (let j = 0; j < n; j++) if (j !== i) body.push(`## S${j}`, 'some words here and there', `![[N${j}]]`);
				files[`N${i}.md`] = body.join('\n');
			}
			return fakeSource(files);
		};
		const o = buildOutline('N0.md', sourceOf(16), PRO);
		expect(o.truncated).toBe(true);
		expect(o.words).toBeGreaterThan(0);
		// Bounded, not exponential. The guard divides the time for 16 notes by the time for 8 notes, both timed here, so a
		// slow CI runner slows both. Measured on the agent Mac 2026-11-01: 43 ms and 402 ms, ratio 9.4. Without the bound,
		// each extra note multiplies the paths, and the ratio is far above the limit. Lowest time of each size over ROUNDS
		// rounds, then the ratio (Procedure AC (b), s1104 CIFIX-A); before, it was the lowest ratio of 3 rounds.
		const small = sourceOf(8);
		const big = sourceOf(16);
		const g = pairedRatio(() => buildOutline('N0.md', small, PRO), () => buildOutline('N0.md', big, PRO));
		expect(g.ratio, `${g.text}, 16 notes against 8 notes`).toBeLessThan(GROWTH_LIMIT);
	}, 120000);

	it('a section embed that starts on line 0 of the open note is not a loop', () => {
		const files = { 'A.md': '# Intro\nHello there\n# Other\n![[#Intro]]' };
		const pro = buildOutline('A.md', fakeSource(files), PRO);
		expect(pro.broken).toBe(0);
		expect(outlineLines(pro.items)).toEqual(['H1 Intro 3w @0', 'H1 Other 4w @2', '  E Intro 3w @3', '    H1 Intro 3w @3']);
		const free = buildOutline('A.md', fakeSource(files), FREE);
		expect(outlineLines(free.items)).toEqual(['H1 Intro @0', 'H1 Other @2', '  E Intro @3', '    H1 Intro @3']);
	});

	it('a whole note embed inside a section embed of the same note is still a loop', () => {
		const files = { 'A.md': '# Intro\n![[A]]\n# Other\n![[#Intro]]' };
		const o = buildOutline('A.md', fakeSource(files), PRO);
		expect(o.broken).toBeGreaterThan(0);
	});

	it('the Markdown copy links to the heading as written, not to the shown text', () => {
		const files = { 'N.md': '# See [[Target|Shown]]\n## The __storm__ [site](https://x.org)' };
		const o = buildOutline('N.md', fakeSource(files), { ...PRO, words: false });
		const md = toMarkdownList(o, { linkText: (p) => p.replace(/\.md$/, ''), words: false });
		expect(md).toBe('- [[N#See Target Shown|See Shown]]\n\t- [[N#The __storm__ site (https //x.org)|The storm site]]\n');
	});
});
