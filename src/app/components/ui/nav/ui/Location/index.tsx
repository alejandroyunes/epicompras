"use client"
import stylex from "@stylexjs/stylex"
import LocationSvg from "../../../Assets/Icons/LocationSvg"
import { spacing, text } from "../../../../../globalTokens.stylex"
import { useRef, useState } from "react";
import ExitSvg from "../../../Assets/Icons/ExitSvg";
import BellSlashSvg from "../../../Assets/Icons/BellSlashSvg";
import { globalTokens as $ } from '../../../../../globalTokens.stylex'
import ArrowRightSvg from "../../../Assets/Icons/ArrowRightSvg";

interface IconTextProps {
  text: string;
}

export default function Location({ text }: IconTextProps) {

  const [open, setOpen] = useState(false)
  const slideNotificaitonRef = useRef<HTMLDivElement>(null)

  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log('Form submitted', inputValue)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

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

          <div {...stylex.props(styles.locationText)}>
            <p>
              ¿Dónde quieres buscar?
            </p>
          </div>

          <div {...stylex.props(styles.searchInput)}>

            <form onSubmit={handleSubmit} {...stylex.props(styles.form)}>
              <input {...stylex.props(styles.input)} type="text" placeholder="Buscar" onChange={handleChange} value={inputValue} />
            </form>

            <div {...stylex.props(styles.arrow)} onClick={handleSubmit}>
              <ArrowRightSvg />
            </div>
          </div>

          <div {...stylex.props(styles.currentContainer)}>
            <LocationSvg />
            <div {...stylex.props(styles.currentLocation)}>
              <p>
                Usar la ubicación actual
              </p>
              <p>blocked</p>
            </div>
          </div>
        </div>

        <div {...stylex.props(styles.resultContainer)}>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
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
    flexDirection: "column",
    margin: 24
  },
  animationExit: {
    display: "flex",
    position: "absolute",
    top: 10,
    right: 16,
    cursor: "pointer"
  },
  locationText: {
    fontSize: text.p,
    paddingBottom: spacing.xs
  },
  searchInput: {
    position: "relative"
  },
  form: {
    width: "100%",
  },
  input: {
    borderStyle: "solid",
    borderColor: xBorderColor,
    borderWidth: {
      default: "2px",
    },
    borderRadius: spacing.xs,
    fontSize: text.p,
    padding: `${spacing.xxs} ${spacing.xs}`,
    boxSizing: "border-box",
    paddingLeft: spacing.xs,
    width: "100%",
  },
  arrow: {
    cursor: "pointer",
    position: "absolute",
    top: "50%",
    right: 8,
    transform: "translateY(-50%)",
  },
  currentContainer: {
    display: "flex",
    flexDirection: "row",
    borderStyle: "solid",
    borderColor: xBorderColor,
    borderWidth: {
      default: "2px",
    },
    alignItems: "center",
    marginTop: spacing.xs,
    padding: `0 ${spacing.xs}`,
  },
  currentLocation: {
    width: "100%",
    padding: `${spacing.xxs} ${spacing.xs}`,
    display: "flex",
    flexDirection: "column"
  },
  resultContainer: {
    margin: 24
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
