"use client"

import stylex from "@stylexjs/stylex"
import MessagesSvg from "../Assets/Icons/MessagesSvg";
import { globalTokens, spacing, text } from "../../../../../globalTokens.stylex"

export default function Messages() {
  return (
    <div className={stylex(styles.container)} >

      <div className={stylex(styles.icon)}>
        <MessagesSvg />
      </div>

    </div>
  )
}

const styles = stylex.create({
  container: {
    display: "flex",
    alignItems: "center",
    marginLeft: spacing.xs,
    position: "relative",
  },
  icon: {
    marginRight: spacing.xs,
    cursor: "pointer"
  },

})

