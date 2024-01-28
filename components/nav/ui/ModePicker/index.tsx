"use client"

import stylex from "@stylexjs/stylex"
import { globalTokens as $, spacing, colors } from "../../../../app/globalTokens.stylex"
import LightModeSvg from "./icons/LightModeSvg"
import DarkModeSvg from "./icons/DarkMode"

import { useTheme } from "@/app/providers"

export default function ModePicker() {

  const { setTheme, theme } = useTheme()

  return (
    <div {...stylex.props(s.container)}>
      {theme === 'dark' ?
        <span {...stylex.props(s.icon)} onClick={() => setTheme('light')}><LightModeSvg /></span>
        :
        <span {...stylex.props(s.icon)} onClick={() => setTheme('dark')}><DarkModeSvg /></span>
      }
    </div>
  )
}

const s = stylex.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    display: "flex",
    cursor: "pointer",
    color: colors.inverted,
    paddingRight: spacing.xxs,
    paddingLeft: spacing.xxs,
    paddingTop: spacing.sm,
    paddingBottom: spacing.sm,
  }
})

