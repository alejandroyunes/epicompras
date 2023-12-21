"use client"

import stylex from "@stylexjs/stylex"
import BellSvg from "../Assets/Icons/BellSvg";
import { spacing } from "../../../../../globalTokens.stylex"
import { useEffect, useRef, useState } from "react"

export default function Notifications() {
  const [open, setOpen] = useState(false)
  const slideNotificaitonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

    // const handleClickAnimationOutside = (event: MouseEvent) => {
    //   if (slideNotificaitonRef.current && !slideNotificaitonRef.current.contains(event.target as Node)) {
    //     setOpen(false)
    //   }
    // }

    // document.addEventListener('click', handleClickAnimationOutside)

    // return () => {
    //   document.removeEventListener('click', handleClickAnimationOutside)
    // }

  }, [slideNotificaitonRef])


  return (
    <div className={stylex(styles.container)} ref={slideNotificaitonRef}>

      <div className={stylex(styles.icon)} onClick={() => setOpen(!open)}>
        <BellSvg />
      </div>

      <div className={stylex(styles.slider, open ? styles.slideIn : styles.slideOut)}>

      </div>
    </div>
  )
}

const slideIn = stylex.keyframes({
  '100%': { transform: 'translateX(0%)' },
})

const slideOut = stylex.keyframes({
  '0%': { transform: 'translateX(0%)' },
  '100%': { transform: 'translateX(-100%)' },
})


const styles = stylex.create({
  container: {
    display: "flex",
    alignItems: "center",
    marginLeft: spacing.xs,
    position: 'relative',
    zIndex: 100,
  },
  icon: {
    marginRight: spacing.xs,
    cursor: "pointer"
  },
  slider: {
    position: "fixed",
    width: '30vw',
    top: '0%',
    height: "100vh",
    right: "-30vw",
    background: "blue",
    transform: "translateX(-100%)"
  },
  slideIn: {
    animation: `${slideIn} 0.5s forwards`
  },
  slideOut: {
    animation: `${slideOut} 0.5s forwards`,
  },
})

