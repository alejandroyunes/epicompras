import * as stylex from '@stylexjs/stylex'
import { colors } from './globalTokens.stylex'

const DARK = '@media (prefers-color-scheme: dark)';

export const lightTheme = stylex.createTheme(colors, {
  primary: 'blue',
  bg: {
    default: "#edebeb",
    [DARK]: "#edebeb",
  }
})

export const darkTheme = stylex.createTheme(colors, {
  primary: 'blue',
  bg: {
    default: "#262424",
    [DARK]: "#262424",
  }
})