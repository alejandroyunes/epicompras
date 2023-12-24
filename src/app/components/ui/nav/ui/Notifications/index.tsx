"use client"

import stylex from "@stylexjs/stylex"
import BellSvg from "../Assets/Icons/BellSvg";
import { globalTokens as $, spacing, text } from "../../../../../globalTokens.stylex"
import { useEffect, useRef, useState } from "react"
import ExitSvg from "../Assets/Icons/ExitSvg";
import BellSlashSvg from "../Assets/Icons/BellSlashSvg";

export default function Notifications() {
  const [open, setOpen] = useState(false)
  const slideNotificaitonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

    const handleClickAnimationOutside = (event: MouseEvent) => {
      if (slideNotificaitonRef.current && !slideNotificaitonRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickAnimationOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickAnimationOutside)
    }
  }, [slideNotificaitonRef])

  return (
    <>
      <div {...stylex.props(styles.icon)} onClick={() => setOpen(!open)}>
        <BellSvg />
      </div>

      <div {...stylex.props(styles.sliderContainer, open ? styles.slideIn : styles.slideOut)} ref={slideNotificaitonRef}>
        <div {...stylex.props(styles.animationContainer)}>

          <div {...stylex.props(styles.animationBell)}>
            <BellSlashSvg />
          </div>

          <div {...stylex.props(styles.notifications)}>
            <p>
              No hay notificaciones
            </p>
          </div>

        </div>

        <div {...stylex.props(styles.animationExit)} onClick={() => setOpen(false)}>
          <ExitSvg />
        </div>
      </div>

      {open && <div {...stylex.props(styles.bg)} />}
    </>
  )
}
const DARK = "@media (prefers-color-scheme: dark)"
const xBorderColor = `rgba(${$.calloutBorderR}, ${$.calloutBorderG}, ${$.calloutBorderB}, 0.3)`

const slideIn = stylex.keyframes({
  '0%': { transform: 'translateX(0%)' },
  '100%': { transform: 'translateX(-100%)' },
})

const slideOut = stylex.keyframes({
  // '0%': { transform: 'translateX(-100%)' },
  '100%': { transform: 'translateX(0%)' },
})


const fadeIn = stylex.keyframes({
  '0%': { visibility: 'hidden', opacity: 0 },
  '100%': { visibility: 'visible', opacity: 1 },
})

const styles = stylex.create({
  icon: {
    marginRight: spacing.xs,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    marginLeft: spacing.xs,
    zIndex: 4,
  },
  sliderContainer: {
    position: "fixed",
    top: 0,
    right: "-30vw",
    width: "30vw",
    height: "100vh",
    borderStyle: "solid",
    borderColor: xBorderColor,
    willChange: 'transform',
    borderWidth: {
      default: "2px",
    },
    background: {
      default: "white",
      [DARK]: "linear-gradient(to bottom, rgb(20, 22, 27), black)",
    },
  },
  slideIn: {
    animation: `${slideIn} 0.5s forwards`,
    zIndex: 100
  },
  slideOut: {
    animation: `${slideOut} 0.5s forwards`,
  },
  animationContainer: {
    display: "flex",
    position: 'relative',
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 24
  },
  animationExit: {
    display: "flex",
    position: "absolute",
    top: 10,
    right: 16,
    cursor: "pointer"
  },
  animationBell: {
    background: {
      default: "rgb(244, 244, 240)",
      [DARK]: "rgb(121 121 111)"
    },
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 56,
    height: 56,
    marginBottom: 16
  },
  notifications: {
    fontSize: text.p,
  },
  bg: {
    position: "fixed",
    width: '70vw',
    top: '0%',
    height: "100vh",
    right: "30vw",
    background: "rgba(9, 9, 11, 0.5)",
    animation: `${fadeIn} 0.5s forwards`,
    zIndex: 100
  }
})
