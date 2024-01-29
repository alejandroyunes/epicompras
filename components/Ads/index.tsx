import * as stylex from "@stylexjs/stylex"
import { globalTokens as $, colors, spacing, text } from "../../app/globalTokens.stylex"
import Link from "next/link"
import Image from "next/image"
import carro from './assets/carro.jpg'
import casa from './assets/casa.jpg'
import estufa from './assets/estufa.jpg'
import laptop from './assets/laptop.jpg'
import HeartSvg from "../Assets/Icons/HeartSvg"
import HeartSvgFill from "../Assets/Icons/HeartSvgFill"
import LikeHeart from "../LikeHeart"
import LocationSvg from "../Assets/Icons/LocationSvg"

export default function Ads() {
  return (
    <section {...stylex.props(s.container)}>
      <div  {...stylex.props(s.adsTitle)}>
        <div {...stylex.props(s.title)}>
          <h2>Anuncios recientes</h2>
        </div>
      </div>

      <div {...stylex.props(s.grid)}>
        <Link href="#" {...stylex.props(s.link)}>
          <div {...stylex.props(s.gridItem)}>
            <Image
              {...stylex.props(s.adImage)}
              src={carro}
              alt="alt"
              width={180}
              height={180}
            />
            <div {...stylex.props(s.gridContainer)}>
              <div {...stylex.props(s.gridDetails)}>
                <h3 {...stylex.props(s.description)}>
                  name of the product Lorem, ipsum dolor.
                </h3>
              </div>
              <div>
                <p {...stylex.props(s.detailsPrice)}>$ 250,000</p>
              </div>
              <div {...stylex.props(s.location)}>
                <div {...stylex.props(s.locationSvg)}>
                  <LocationSvg />
                </div>
                <p {...stylex.props(s.city)}>Medellín, Colombia</p>
              </div>
              <p {...stylex.props(s.date)}>
                30 de diciembre
              </p>
            </div>
          </div>
        </ Link>
        <div {...stylex.props(s.likeHeartSvg)}>
          <LikeHeart />
        </div>


      </div>

    </section >
  )
}

const s = stylex.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    maxWidth: $.maxWidth,
  },
  adsTitle: {
    display: "flex",
    flexDirection: "row",
  },
  title: {
    fontSize: text.sm,
    fontWeight: "bold",
    color: colors.inverted
  },
  grid: {
    display: "grid",
    gridTemplateColumns: {
      default: "repeat(4, minmax(0, 1fr))",
      "@media (max-width: 1100px) and (min-width: 900px)": "repeat(3, minmax(0, 1fr))",
      "@media (max-width: 900px) and (min-width: 700px)": "repeat(2, minmax(0, 1fr))",
      "@media (max-width: 700px)": "1fr",
    },
    gap: 16,
  },
  link: {
    cursor: "pointer",
    color: colors.inverted,
    textDecoration: "none"
  },
  gridItem: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: colors.inputBg,
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
    borderBottomLeftRadius: '12px',
    borderBottomRightRadius: '12px',
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: colors.xBorderColor,
    boxShadow: colors.invertedShadows,
  },
  adImage: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
  },
  gridContainer: {
    display: "flex",
    flexDirection: "column",
    padding: `0 ${spacing.xxs}`,
    margin: `0 0 ${spacing.xs} 0`,
  },
  gridDetails: {
    display: "flex",
  },
  likeHeartSvg: {
    cursor: "pointer",
    position: 'absolute',
    backgroundColor: colors.inputBg,
    padding: 50,
    borderBottomRightRadius: '12px',
    borderTopLeftRadius: '12px',
  },
  description: {
    fontSize: text.p,
    fontWeight: 500,
    lineHeight: "22px",
    margin: 0,
    padding: `${spacing.xxs} 0`,
  },
  detailsPrice: {
    fontSize: text.p,
    fontWeight: "bold",
    margin: 0,
    padding: `${spacing.xxs} 0`,
  },
  location: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: 0,
    padding: 0,
  },
  locationSvg: {
    paddingRight: `${spacing.xxs}`,
  },
  date: {
    margin: 0,
    padding: 0,
  },
  city: {
    margin: 0,
    padding: 0,
  }
})


