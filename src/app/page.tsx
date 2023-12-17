import * as stylex from "@stylexjs/stylex"
import Card from "./Card"
import { globalTokens as $, spacing, text } from "./globalTokens.stylex"
import ButtonsDemo from "./components/ButtonsDemo"

export default function Home() {
  return (
    <main {...stylex.props(s.main)}>
      <div {...stylex.props(s.description)}>
        <p {...stylex.props(s.descP)}>
          Get started by editing&nbsp
        </p>
      </div>
      <div {...stylex.props(s.hero)}>
        <h1 {...stylex.props(s.h1)}>
          Next.js App Dir<span {...stylex.props(s.emoji)}>♥️</span>️StyleX
        </h1>
      </div>
      <ButtonsDemo />

      <div {...stylex.props(s.grid)}>
        <Card
          href={`${HOMEPAGE}/docs/learn/`}
          title="Docs"
          body="Learn how to use StyleX to build UIs"
        />
        <Card
          href={`${HOMEPAGE}/docs/api/`}
          title="API"
          body="Browse through the StyleX API reference"
        />
        <Card
          href={`${HOMEPAGE}/playground/`}
          title="Playground"
          body="Playing with StyleX and look at look at the compile outputs"
        />
        <Card
          href="https://github.com/nmn/nextjs-app-dir-stylex"
          title="Templates"
          body="Get started with a NextJS+StyleX project."
        />
      </div>
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

const HOMEPAGE = "http://stylex-docusaurus.vercel.app"

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
  hero: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
  },
  emoji: {
    position: "relative",
    fontFamily: "sans-serif",
    top: {
      default: 0,
      [media.mobile]: spacing.xxxs,
    },
  },
  grid: {
    display: "grid",
    gridTemplateColumns: {
      default: "repeat(4, minmax(25%, auto))",
      [media.mobile]: "1fr",
      [media.tablet]: "repeat(2, 50%)",
    },
    width: $.maxWidth,
    maxWidth: {
      default: "100%",
      [media.mobile]: 320,
    },
    textAlign: { [media.mobile]: "center" },
  },
})
