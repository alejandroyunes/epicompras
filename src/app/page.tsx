import * as stylex from "@stylexjs/stylex"
import { globalTokens as $, spacing, text } from "./globalTokens.stylex"

export default function Home() {
  return (
    <main {...stylex.props(s.main)}>
      <h1 {...stylex.props(s.h1)}>hello world</h1>
    </main>
  )
}

const media = {
  mobile: "@media (max-width: 700px)",
  tablet: "@media (min-width: 701px) and (max-width: 1120px)"
}

const bgImage = `linear-gradient(to bottom, ${$.bgStartRGB}, ${$.calloutRGB50})`
const xBorderColor = `rgba(${$.calloutBorderR}, ${$.calloutBorderG}, ${$.calloutBorderB}, 0.3)`
const xBorderBottomColor = `rgba(${$.calloutBorderR}, ${$.calloutBorderG}, ${$.calloutBorderB}, 0.25)`


const s = stylex.create({
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "100vh",
    paddingTop: spacing.xxl,
    paddingBottom: {
      default: spacing.xxl,
      [media.mobile]: spacing.md,
    },
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
      [media.mobile]: "column",
    },
    color: {
      [media.mobile]: "blue",

    }
  },

  // grid: {
  //   display: "grid",
  //   gridTemplateColumns: {
  //     default: "repeat(4, minmax(25%, auto))",
  //     [media.mobile]: "1fr",
  //     [media.tablet]: "repeat(2, 50%)",
  //   },
  //   width: $.maxWidth,
  //   maxWidth: {
  //     default: "100%",
  //     [media.mobile]: 320,
  //   },
  //   textAlign: { [media.mobile]: "center" },
  // },
})
