import * as stylex from "@stylexjs/stylex"
import { globalTokens as $, spacing, text } from "../../../globalTokens.stylex"
import Link from "next/link"

export default function Categories() {
  return (
    <section {...stylex.props(s.container)}>
      <div {...stylex.props(s.categories)}>
        <div {...stylex.props(s.categoriesTitle)}>
          <h2>Categorías</h2>
        </div>
        <div>
          <Link href="#" {...stylex.props(s.categoriesUrl)}>
            <span >Ver todos</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
const xBorderColor = `rgba(${$.calloutBorderR}, ${$.calloutBorderG}, ${$.calloutBorderB}, 0.3)`

const s = stylex.create({
  container: {
    width: "100%",

  },
  categories: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: `${spacing.xs} ${spacing.md}`,
    paddingBottom: `${spacing.xs}`,
    borderBottom: `1px solid ${xBorderColor}`,

  },
  categoriesTitle: {
    fontSize: text.sm,
    fontWeight: "bold",
  },
  categoriesUrl: {
    fontSize: text.sm,
    textDecoration: "none",
    color: "inherit",
    ":hover": {
      textDecoration: "underline",
    },
  }
})