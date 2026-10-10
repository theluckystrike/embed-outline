# Embed Outline

Embed Outline shows one outline for a note that is built from embeds. The core Outline lists only the headings of the note itself. When a note is mostly `![[Chapter 1]]`, `![[Chapter 2]]` and so on, the core Outline is almost empty. Embed Outline puts the headings of each embedded note under its embed, in the order you read them, and adds callout titles and headings that sit inside list items.

Use it for a book or thesis kept as one note per chapter, or a project page that embeds meeting notes.

The outline of the note and of the notes it embeds is free. Pro adds embeds inside embedded notes, word counts that include embedded text, marks for broken embeds and a Markdown copy of the outline. Pro costs $5 a month or $15 once, through GitHub Sponsors.

## Features

<img src="https://raw.githubusercontent.com/theluckystrike/embed-outline/HEAD/docs/embed-outline.gif" alt="The outline of a manuscript note with its embedded chapters, a click into a chapter, then word counts with Pro" width="720">

### Embedded notes in the outline

<img src="https://raw.githubusercontent.com/theluckystrike/embed-outline/HEAD/docs/embedded.png" alt="A manuscript note on the left and, on the right, an outline with a row for each embedded chapter and the chapter headings under it" width="720">

Each embed gets a row with the name of the embedded note. Under it you see the headings of that note, with their own levels. The rows sit under the heading of your note that holds the embed, so "Part one" contains Chapter 1 and Chapter 2.

An embed of one section, such as `![[Chapter 4#The storm]]`, shows that heading and the headings below it, and nothing else of the note. The same works for a section of the note itself, such as `![[#Summary]]`. A block embed such as `![[Note#^quote]]` gets a row with no headings under it. Images, PDFs and other files are left out, because they have no headings.

### Jump to any row

<img src="https://raw.githubusercontent.com/theluckystrike/embed-outline/HEAD/docs/jump.png" alt="The manuscript scrolled to the heading A letter in the drawer inside the embedded Chapter 2" width="720">

Click a heading of your note and the cursor moves to that heading. Click a heading of an embedded note and the note scrolls to the embed, then to that heading inside the embed. In reading view the page scrolls to the same place.

Hold Ctrl (Cmd on macOS) and click a row from an embedded note to open that note in a new tab, at that heading. Rows also work from the keyboard: move to a row with Tab and press Enter.

The arrow at the start of a row folds it. The button at the top folds all top-level rows.

### Callouts and headings in lists

<img src="https://raw.githubusercontent.com/theluckystrike/embed-outline/HEAD/docs/callouts.png" alt="A research note with info, question and warning callouts listed as rows under their headings, and a heading written inside a list item" width="720">

A callout such as `> [!warning] Spring tides` shows as a row with its title, under the heading it sits in. A callout with no title shows its type, as the app does. Links and emphasis in a title show as plain text.

A heading written inside a list item, such as `- ## Open questions`, is also a row. The app does not treat these as headings, so the core Outline never shows them. You can turn both off in the settings.

### Nested embeds (Pro)

<img src="https://raw.githubusercontent.com/theluckystrike/embed-outline/HEAD/docs/nested.png" alt="The outline with the letter that Chapter 2 embeds open one level deeper, with its two headings" width="720">

Without Pro, the outline opens the embeds of the note itself. An embed inside an embedded note shows as a row with a lock, and a line at the top says how many there are. Pro opens them down to 5 levels. Set the depth in the settings.

### Word counts (Pro)

<img src="https://raw.githubusercontent.com/theluckystrike/embed-outline/HEAD/docs/word-counts.png" alt="The outline with a word count on each heading and embed, and 439 words for the whole manuscript at the top" width="720">

Pro shows the number of words next to each heading and each embed. The count of a heading covers its whole section, with the embedded text counted. The top of the panel shows the total for the note.

Links count as their visible text. Code, comments, front matter, URLs and callout markers do not count. Each Chinese or Japanese character counts as one word.

### Broken embeds (Pro)

<img src="https://raw.githubusercontent.com/theluckystrike/embed-outline/HEAD/docs/broken.png" alt="The end of the outline with a red row No such note: Acknowledgments under Back matter" width="720">

Pro marks an embed whose note does not exist, whose heading is not in the note, or whose block ID is not in the note. It also marks an embed that ends up embedding itself, for example two notes that embed each other. The top of the panel counts them. Without Pro, these embeds are left out of the outline.

### Copy as a Markdown list (Pro)

<img src="https://raw.githubusercontent.com/theluckystrike/embed-outline/HEAD/docs/copy.png" alt="A new note with the outline pasted as a nested list of links to each heading, with word counts" width="720">

The copy button, or the command "Copy the outline as a Markdown list", puts the outline on the clipboard. Each heading becomes a link to the note it comes from, such as `[[Chapter 1#The ferry|The ferry]]`, with the word count when counts are on. Paste it into a note to get a table of contents for the whole book, with links that work.

## Install

When Embed Outline is in the community directory, open Settings, then Community plugins, then Browse, and search for "Embed Outline". Select Install, then Enable.

To install by hand, download `main.js`, `manifest.json` and `styles.css` from the latest release. Put them in `<vault>/.obsidian/plugins/embed-outline/`. Reload the list of community plugins, then turn on Embed Outline.

It needs Obsidian 1.13.4 or newer. It was tested on desktop with Obsidian 1.13.4 and 1.14.4. It uses no desktop-only features, so it also runs on mobile.

## Usage

1. Turn on the plugin. The outline gets a tab in the right sidebar.
2. Open a note that embeds other notes.
3. Select the Embed outline tab, or run the command "Open the outline panel".
4. Click a row to go to it.

The outline follows the note that you open last. It updates about a third of a second after you change that note or any note that it embeds.

## Pro

Pro unlocks nested embeds, word counts, broken embed marks and the Markdown copy. To get it:

1. Sponsor [theluckystrike on GitHub Sponsors](https://github.com/sponsors/theluckystrike) with $5 a month, or $15 once. When you have paid $15 in total, Pro stays on.
2. In Obsidian, open the settings of Embed Outline and select "Sign in with GitHub".
3. The plugin copies a code and opens github.com/login/device. Paste the code there and approve.

If a monthly sponsorship ends before you have paid $15 in total, Pro turns off at the next check, within 7 days. The free outline keeps working.

## Settings

<img src="https://raw.githubusercontent.com/theluckystrike/embed-outline/HEAD/docs/settings.png" alt="Settings with the Pro section, the two outline switches, the embed depth slider and the two Pro switches" width="720">

| Setting | Default | Allowed values |
| --- | --- | --- |
| Callout titles | On | On or off |
| Headings in list items | On | On or off |
| Embed depth | 5 | 1 to 5 levels (Pro) |
| Word counts | On | On or off (Pro) |
| Broken embeds | On | On or off (Pro) |

## FAQ

### Does it replace the core Outline?

No. Both can be open at the same time. Embed Outline only reads your notes. It never changes a note.

### Is it slow on a long book?

It reads the open note and the notes it embeds, from the cache of the app, and nothing else in the vault. It stops at 400 notes and 5,000 rows, so a loop of notes that embed each other cannot freeze the app.

### Why does a row say "No such heading" when the embed shows in the note?

The heading text in the embed and in the note must match after the app removes special characters such as `:` and `#`. The plugin asks the app to find the heading, so the row and the note agree. Check for a renamed heading.

## Payment, account and network

The core features are free and stay free. Pro features need a GitHub Sponsors sponsorship of theluckystrike: $5 a month or more, or $15 once. When you have paid $15 in total, Pro stays on. Your notes stay readable and editable with or without Pro.

GitHub handles the payment. Sponsor at https://github.com/sponsors/theluckystrike. You need no account for the free features. Pro needs the GitHub account that sponsors.

Until you select "Sign in with GitHub" in the settings, Embed Outline makes no network requests. Sign in uses the GitHub device flow. Embed Outline sends its public client ID and the scope `read:user` to `https://github.com/login/device/code` and shows you a code. While you enter the code at https://github.com/login/device, it asks `https://github.com/login/oauth/access_token` every few seconds whether sign in is done. The scope `read:user` is read-only access to your profile, which GitHub needs to show the sponsorship tier. It gives no access to repositories and no write access.

After sign in, Embed Outline sends one query to `https://api.github.com/graphql`: does the signed-in account sponsor theluckystrike, at which tier, and how much it has paid theluckystrike in total. It asks again at most once every 7 days, or when you select Refresh. It sends no note content, file names or other vault data, and it has no telemetry.

Pro keeps working for 14 days without a successful check. The GitHub token stays in the secret storage of Obsidian on this device. It is not written to data.json or other vault files, so it does not sync or reach a git repository. The local storage of this device keeps your GitHub login, the tier and the time of the last check. Sign out deletes the token. You can also revoke the access in your GitHub settings, under Applications.

## Support

Report a bug or ask for a feature in the issue tracker of this repository. Include your Obsidian version, the embed as you wrote it, and what the outline showed.

To build from source:

```
npm ci
npm run build
npm test
```

The tests check 28 golden cases for the outline rules. An end-to-end test opens the sample manuscript in Obsidian and checks every row of the outline, the jumps and the Pro features.

## License

MIT
