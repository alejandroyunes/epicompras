"use client"

import stylex from "@stylexjs/stylex"
import ProfileSvg from "../Assets/Icons/ProfileSvg";
import { globalTokens as $, spacing, text } from "../../../../../globalTokens.stylex"
import { useState } from "react"


export default function Profile() {
  const [open, setOpen] = useState(false)

  return (
    <div className={stylex(styles.container)} onClick={() => setOpen(!open)}>

      <div className={stylex(styles.icon)}>
        <ProfileSvg />
      </div>
      {open &&
        <div className={stylex(styles.dropdown)}>
          <a href="#" className={stylex(styles.a)}>
            <span className={stylex(styles.iconDropdown)}><ProfileSvg /></span>Profile</a>
          <a href="#" className={stylex(styles.a)}>Dropdown Link </a>
          <a href="#" className={stylex(styles.a)}>Dropdown Link </a>
        </div>}
    </div>
  )
}

const xBorderColor = `rgba(${$.calloutBorderR}, ${$.calloutBorderG}, ${$.calloutBorderB}, 0.3)`

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
  dropdown: {
    position: "absolute",
    top: "30px",
    right: 0,
    transform: 'translateY(16px)',
    borderStyle: "solid",
    borderColor: xBorderColor,
    borderWidth: {
      default: "2px",
    },
    borderRadius: spacing.xs,
    margin: "15px"
  },
  a: {
    color: 'white',
    fontSize: text.p,
    padding: "5px 20px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    whiteSpace: "nowrap",
    textDecoration: "none",
    ':hover': {
      background: "red"
    },
    ':first-child:hover': {
      background: "blue",
      borderTopLeftRadius: spacing.xs,
      borderTopRightRadius: spacing.xs
    },
    ':last-child:hover': {
      background: "green",
      borderBottomLeftRadius: spacing.xs,
      borderBottomRightRadius: spacing.xs
    }
  },

  iconDropdown: {
    marginRight: spacing.xs,
    fontSize: "14px"
  }
})
