import * as stylex from "@stylexjs/stylex"
import { globalTokens as $, spacing, text } from "./globalTokens.stylex"
import Categories from "./components/ui/categories"

export default function Home() {
  return (
    <main {...stylex.props(s.main)}>
      <Categories />
    </main>
  )
}

const s = stylex.create({
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    // width: {
    //   default: spacing.xxl,
    //   "@media (max-width: 700px)": spacing.md,
    // },
  },
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
    color: {
      "@media (max-width: 700px)": "blue",
    }
  },
})
