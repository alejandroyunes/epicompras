import * as stylex from "@stylexjs/stylex"
import { globalTokens as $, spacing, text } from "../../../globalTokens.stylex"
import Link from "next/link"
import Image from "next/image"
import carro from './assets/carro.jpg'
import casa from './assets/casa.jpg'
import estufa from './assets/estufa.jpg'
import laptop from './assets/laptop.jpg'
import HeartSvg from "../Assets/Icons/HeartSvg"

export default function Ads() {
  return (
    <section {...stylex.props(s.container)}>
      <div  {...stylex.props(s.adsTitle)}>
        <div {...stylex.props(s.title)}>
          <h2>Anuncios recientes</h2>
        </div>
      </div>

      <div {...stylex.props(s.grid)}>

        <div {...stylex.props(s.gridItem)}>
          <div {...stylex.props(s.gridImage)}>
            <Image
              {...stylex.props(s.adImage)}
              src={carro}
              alt="alt"
              width={180}
              height={180}
            />
          </div>
          <div {...stylex.props(s.gridDetails)}>
            <div>name of the product</div>
            <div>
              <HeartSvg />
            </div>

          </div>
        </div>

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
    margin: "0 auto",
    maxWidth: $.maxWidth
  },
  adsTitle: {
    display: "flex",
    flexDirection: "row",
    margin: `${spacing.xs} ${spacing.md}`,
    paddingBottom: `${spacing.xs}`,
  },
  title: {
    fontSize: text.sm,
    fontWeight: "bold",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    margin: `${spacing.xs} ${spacing.md}`,
  },
  gridItem: {
    display: "flex",
    flexDirection: "column",
    background: {
      default: "white",
      "@media (prefers-color-scheme: dark)": "rgb(24, 24, 27)",
    },
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
    borderBottomLeftRadius: '12px',
    borderBottomRightRadius: '12px',
  },
  gridImage: {
    margin: `0 0 ${spacing.xxs} 0`,
  },
  adImage: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
  },
  gridDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `0 ${spacing.xxs}`
  }
})