import * as stylex from "@stylexjs/stylex"
import { globalTokens as $, spacing, text } from "./globalTokens.stylex"
import { DesktopNav } from "../components/nav/DesktopNav"
import { MobileNav } from "../components/nav/Mobile"
import Categories from "../components/categories"
import Ads from "../components/Ads"

export default function Home() {
  return (
    <>
      <div {...stylex.props(s.desktopNav)}>
        <DesktopNav />
      </div>
      <div {...stylex.props(s.mobileNav)}>
        <MobileNav />
      </div>
      <Categories />
      <Ads />
    </>
  )
}

const s = stylex.create({
  h1: {
    fontSize: text.h1,
    lineHeight: 1,
    fontFamily: $.fontSans,
    fontWeight: 400,
    textAlign: "center",
    display: "flex",
    gap: spacing.md,
    whiteSpace: "nowrap",
    flexDirection: {
      default: "row",
      "@media (max-width: 700px)": "column",
    },
  },
  desktopNav: {
    display: {
      default: "block",
      ["@media (max-width: 900px)"]: "none"
    },
  },
  mobileNav: {
    display: {
      default: "none",
      "@media (max-width: 900px)": "block"
    },
  }
})
