"use client"
import React, {
  ReactNode,
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react'
import * as stylex from "@stylexjs/stylex"
import { globalTokens as $, colors } from "./globalTokens.stylex"

import { SessionProvider } from 'next-auth/react'
import { darkTheme, lightTheme } from './themes'

type Props = {
  children?: ReactNode
}

export const NextAuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
}

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  setTheme: Dispatch<SetStateAction<Theme>>
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: Props) => {

  const isLocalStorageSupported = typeof window !== 'undefined' && window.localStorage
  const storeTheme = isLocalStorageSupported ? localStorage.getItem('theme') as Theme | null : null

  const [theme, setTheme] = useState<Theme>(storeTheme !== null ? storeTheme : 'light');
  const contextValue: ThemeContextType = { theme, setTheme }

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme, isLocalStorageSupported])

  return (
    <ThemeContext.Provider value={contextValue}>
      <NextAuthProvider>
        <html {...stylex.props(s.html, s.reset)} lang="es">
          <body {...stylex.props(s.reset, s.body, theme === 'dark' ? darkTheme : lightTheme)}>
            {children}
          </body>
        </html>
      </NextAuthProvider>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

const fadeIn = stylex.keyframes({
  '0%': { visibility: 'hidden', opacity: 0 },
  '100%': { visibility: 'visible', opacity: 1 },
})

const fgColor = `rgba(${$.foregroundR}, ${$.foregroundG}, ${$.foregroundB}, 1)`

const s = stylex.create({
  html: {
    colorScheme: "light dark",
  },
  reset: {
    minHeight: "100%",
    margin: 0,
    padding: 0,
  },
  body: {
    color: fgColor,
    backgroundColor: colors.bg,
    fontFamily: $.fontSans,
    maxWidth: $.maxWidth,
    margin: '0 auto',
    animationName: fadeIn,
    animationDuration: '2.8s',
    animationFillMode: 'forwards',
    animationIterationCount: 1,
    animationTimingFunction: 'ease-in-out',
  }
})
