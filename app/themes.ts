import * as stylex from '@stylexjs/stylex'
import { colors } from './globalTokens.stylex'

const DARK = '@media (prefers-color-scheme: dark)';

export const lightTheme = stylex.createTheme(colors, {
  primary: 'blue',
  bg: {
    default: "#edebeb",
    [DARK]: "#edebeb",
  },
  inputBg: {
    default: "#f2ebeb",
    [DARK]: "#f2ebeb",
  },
  inverted: {
    default: "#262424",
    [DARK]: "#262424",
  }
})

export const darkTheme = stylex.createTheme(colors, {
  primary: 'blue',
  bg: {
    default: "#262424",
    [DARK]: "#262424",
  },
  inputBg: {
    default: "#3b3737",
    [DARK]: "#3b3737",
  },
  inverted: {
    default: "#edebeb",
    [DARK]: "#edebeb",
  }
})