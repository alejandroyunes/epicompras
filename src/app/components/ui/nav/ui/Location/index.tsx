"use client"
import stylex from "@stylexjs/stylex"
import LocationSvg from "../../../Assets/Icons/LocationSvg"
import { spacing, text } from "../../../../../globalTokens.stylex"
import { useRef, useState } from "react";
import ExitSvg from "../../../Assets/Icons/ExitSvg";
import BellSlashSvg from "../../../Assets/Icons/BellSlashSvg";
import { globalTokens as $ } from '../../../../../globalTokens.stylex'

interface IconTextProps {
  text: string;
}

export default function Location({ text }: IconTextProps) {

  const [open, setOpen] = useState(false)
  const slideNotificaitonRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <div className={stylex(styles.container)} onClick={() => setOpen(!open)}>
        <div className={stylex(styles.icon)}>
          <LocationSvg />
        </div>
        <div className={stylex(styles.text)}>
          {text}
        </div>
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
  container: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    flexDirection: {
      default: null,
      "@media (max-width: 900px)": "row-reverse",
    },
    marginLeft: {
      default: spacing.sm,
      "@media (max-width: 900px)": spacing.xxs,
    },
  },
  icon: {
    marginRight: {
      default: spacing.xs,
      "@media (max-width: 900px)": 0,
    }
  },
  text: {
    fontSize: text.p,
    marginRight: {
      default: null,
      "@media (max-width: 900px)": spacing.xxs,
    },
  },

  sliderContainer: {
    position: "fixed",
    top: 0,
    right: {
      default: "-30vw",
      "@media (max-width: 900px)": "-80vw"
    },
    width: {
      default: "30vw",
      "@media (max-width: 900px)": "80vw"
    },
    height: "100vh",
    borderLeftStyle: "solid",
    borderLeftWidth: 2,
    borderLeftColor: xBorderColor,
    willChange: 'transform',
    backgroundColor: {
      default: "white",
      "@media (prefers-color-scheme: dark)": "rgb(20, 22, 27)",
    },
  },
  slideIn: {
    animationName: slideIn,
    animationDuration: "0.5s",
    animationFillMode: "forwards",
    zIndex: 101
  },
  slideOut: {
    animationName: slideOut,
    animationDuration: "0.5s",
    animationFillMode: "forwards",
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
    backgroundColor: {
      default: "rgb(244, 244, 240)",
      "@media (prefers-color-scheme: dark)": "rgb(121 121 111)"
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
    width: '100vw',
    left: 0,
    top: 0,
    height: "100vh",
    backgroundColor: "rgba(20, 22, 27, 0.5)",
    animationName: fadeIn,
    animationDuration: "0.5s",
    animationFillMode: "forwards",
    zIndex: 100
  }
})
