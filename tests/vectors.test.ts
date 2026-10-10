import { describe, expect, it } from 'vitest';
import vectors from './vectors/embed-outline.json';
import { buildOutline, outlineLines, type OutlineOptions } from '../src/outline';
import { fakeSource } from './scan';

interface Expected {
	lines: string[];
	embeds: number;
	broken: number;
	locked: number;
	words?: number;
}

describe('golden vectors (packages/spec/vectors/embed-outline.json)', () => {
	it('has at least 20 cases', () => {
		expect(vectors.cases.length).toBeGreaterThanOrEqual(20);
	});
	for (const c of vectors.cases) {
		it(c.name, () => {
			const [files, root, opts] = c.args as [Record<string, string>, string, OutlineOptions];
			const o = buildOutline(root, fakeSource(files), opts);
			const got: Expected = { lines: outlineLines(o.items), embeds: o.embeds, broken: o.broken, locked: o.locked };
			if (o.words !== undefined) got.words = o.words;
			expect(got).toEqual(c.expected as Expected);
		});
	}
});
