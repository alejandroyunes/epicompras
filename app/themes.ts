//themes.ts
import * as stylex from '@stylexjs/stylex';
import { colors, colorsRepo } from './globalTokens.stylex';

// A constant can be used to avoid repeating the media query
const DARK = '@media (prefers-color-scheme: dark)';

// Dracula theme
export const dracula = stylex.createTheme(colors, {
  ...colorsRepo,
  // primaryText: { default: 'green', [DARK]: 'red' },
  background: { default: 'red', [DARK]: 'black' },
});