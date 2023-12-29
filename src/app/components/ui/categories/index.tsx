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
      <div {...stylex.props(s.categoryItems)}>
        <ul  {...stylex.props(s.unorderedList)}>
          <li>Categoría 1</li>
          <li>Categoría 2</li>
          <li>Categoría 3</li>
          <li>Categoría 4</li>
          <li>Categoría 1</li>
          <li>Categoría 2</li>
          <li>Categoría 3</li>
          <li>Categoría 4</li>
          <li>Categoría 1</li>
          <li>Categoría 2</li>
          <li>Categoría 3</li>
          <li>Categoría 4</li>
          <li>Categoría 1</li>
          <li>Categoría 2</li>
          <li>Categoría 3</li>
          <li>Categoría 4</li>
        </ul>
      </div>
    </section>
  )
}
const xBorderColor = `rgba(${$.calloutBorderR}, ${$.calloutBorderG}, ${$.calloutBorderB}, 0.3)`

const s = stylex.create({
  container: {
    width: "100%",
    diplay: "flex",
    flexDirection: "row",
    alignItems: "center",
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
  },
  categoryItems: {
    margin: `${spacing.xs} ${spacing.md}`,
    paddingBottom: `${spacing.xs}`,
    width: "auto",
    maxWidth: "100%",
    overflowX: "scroll",
    scrollbarWidth: "thin",
    scrollbarColor: `transparent ${xBorderColor}`, // You can adjust the color

    "::-webkit-scrollbar": {
      width: "8px",
      height: "8px"
    },

    "::-webkit-scrollbar-thumb": {
      borderRadius: "8px", // This rounds the thumb
      background: xBorderColor, // You can adjust the color
    },
  },
  unorderedList: {
    display: "inline-grid",
    gridAutoFlow: "column",
    gridGap: `${spacing.xs}`,
    listStyle: "none",
    margin: 0,
    padding: 0,
  }
})

// Estamos enterados de vuestra posición

// A voces inocentes habeís venido a callar
// Las caras descompuestas de tanto aguantar
// Los ojos en la trastienda y las rodillas por doblar

// Una voz por megáfono nos alienta a continuar
// “renunciar a luchar es renunciar a vivir”
// Con la garganta reseca su voz no puede afinar
// Y muere otro yapeta que no se quiso callar

// Para alterar percepciones tenemos a la nación
// La prensa la radio y la televisión
// Acá no pasa nada hay brotes de insumisión
// Rebelión sofocadad sin muertos que lamentar