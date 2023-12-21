"use client"

import stylex from "@stylexjs/stylex"
import { globalTokens as $, spacing, text } from "../../../../../globalTokens.stylex";
import ModeSvg from "../Assets/Icons/ModeSvg"
import { useEffect, useRef, useState } from "react";
import ProfileSvg from "../Assets/Icons/ProfileSvg";
import AdsSvg from "../Assets/Icons/AdsSvg";
import MessageSvg from "../Assets/Icons/MessagesSvg";

export default function ModePicker() {

  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [dropdownRef])

  return (
    <div className={stylex(styles.container)} onClick={() => setOpen(!open)} ref={dropdownRef}>

      <div className={stylex(styles.icon)}>
        <ModeSvg />
      </div>
      {open &&
        <div className={stylex(styles.dropdown)}>
          <a href="#" className={stylex(styles.a)}><span className={stylex(styles.iconDropdown)}><ProfileSvg /></span>
            Profile
          </a>
          <a href="#" className={stylex(styles.a)}><span className={stylex(styles.iconDropdown)}><AdsSvg /></span>
            Publicaciones
          </a>
          <a href="#" className={stylex(styles.a)}><span className={stylex(styles.iconDropdown)}><MessageSvg /></span>
            Mensajes
          </a>
        </div>}
    </div>
  )
}

const xBorderColor = `rgba(${$.calloutBorderR}, ${$.calloutBorderG}, ${$.calloutBorderB}, 0.3)`
const DARK = "@media (prefers-color-scheme: dark)"

const styles = stylex.create({
  container: {
    display: "flex",
    alignItems: "center",
    marginLeft: spacing.xs,
  },
  icon: {
    marginRight: spacing.xxs,
    cursor: "pointer"
  },
  dropdown: {
    position: "absolute",
    top: 20,
    right: 0,
    transform: 'translateY(16px)',
    borderStyle: "solid",
    borderColor: xBorderColor,
    borderWidth: {
      default: "2px",
    },
    borderRadius: spacing.xs,
    margin: "15px",
    background: {
      default: "white",
      [DARK]: "linear-gradient(to bottom, rgb(20, 22, 27), black)",
    },
  },
  a: {
    color: "inherit",
    fontSize: text.p,
    padding: "5px 20px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    whiteSpace: "nowrap",
    textDecoration: "none",
    ':hover': {
      background: xBorderColor
    },
    ':first-child:hover': {
      background: xBorderColor,
      borderTopLeftRadius: spacing.xs,
      borderTopRightRadius: spacing.xs
    },
    ':last-child:hover': {
      background: xBorderColor,
      borderBottomLeftRadius: spacing.xs,
      borderBottomRightRadius: spacing.xs
    }
  },
  iconDropdown: {
    display: "flex",
    marginRight: spacing.xs,
  }
})

