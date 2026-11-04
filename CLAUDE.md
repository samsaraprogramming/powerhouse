# Powerhouse PT site

## Design: every component gets its own styling

Each list, card and content block is styled for what it holds and where it sits. Don't reuse one generic
treatment (a checkmark list, the same bullet, the same card) across unrelated content.

- Before styling something new, check which treatments the site already uses (`src/styles/site.css`) and pick
  one that isn't taken, unless it is the same kind of content (for example, every condition page shares one style).
- Match the marker to the meaning: checkmarks only for real checklists (things to bring, steps done), never for
  symptoms, causes or anything negative; numbers only where order matters.
- Reuse a style across different content only when the user asks for it.
- When restyling, list every place that uses the old style and say which ones you're changing and which you're
  leaving, so nothing is quietly left behind.
- Show a few options side by side before committing to one; the user picks.

The user dislikes green-heavy styling and divider lines between items.
