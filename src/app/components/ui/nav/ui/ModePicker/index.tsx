"use client"

import stylex from "@stylexjs/stylex"
import { globalTokens as $, spacing, text } from "../../../../../globalTokens.stylex"
import ModeSvg from "../Assets/Icons/ModeSvg"
import { useEffect, useReducer, useRef, useState } from "react"
import LightModeSvg from "./icons/LightModeSvg"
import DarkModeSvg from "./icons/DarkMode"

export default function ModePicker() {

  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownRef])

  return (
    <>
      <div className={stylex(styles.container)} onClick={() => setOpen(!open)} ref={dropdownRef}>
        <div className={stylex(styles.icon)}>
          <ModeSvg />
        </div>
        {open &&
          <div className={stylex(styles.dropdown)}>
            <a {...stylex.props(styles.a)} >
              <span {...stylex.props(styles.iconDropdown)}><LightModeSvg /></span>
              Modo Claro
            </a>
            <a {...stylex.props(styles.a)} >
              <span {...stylex.props(styles.iconDropdown)}><DarkModeSvg /></span>
              Modo Oscuro
            </a>
          </div>}
      </div>

    </>
  )
}

const xBorderColor = `rgba(${$.calloutBorderR}, ${$.calloutBorderG}, ${$.calloutBorderB}, 0.3)`

const styles = stylex.create({
  container: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    marginLeft: spacing.xxs,
    marginRight: spacing.xxs,

  },
  icon: {
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
    backgroundColor: {
      default: "white",
      "@media (prefers-color-scheme: dark)": "linear-gradient(to bottom, rgb(20, 22, 27), black)",
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
      backgroundColor: xBorderColor
    },
    ':first-child:hover': {
      backgroundColor: xBorderColor,
      borderTopLeftRadius: spacing.xs,
      borderTopRightRadius: spacing.xs
    },
    ':last-child:hover': {
      backgroundColor: xBorderColor,
      borderBottomLeftRadius: spacing.xs,
      borderBottomRightRadius: spacing.xs
    }
  },
  iconDropdown: {
    display: "flex",
    marginRight: spacing.xs,
  }
})

