import * as stylex from "@stylexjs/stylex"
import { globalTokens as $, spacing, text } from "../../../globalTokens.stylex"
import Link from "next/link"
import Image from "next/image"
import houses from './assets/carros.webp'
import cars from './assets/carros.webp'
import smartphones from './assets/smartphones.webp'
import inmobiliario from './assets/inmobilario.webp'
import vestido from './assets/vestido.webp'

export default function Categories() {
  return (
    <section {...stylex.props(s.container)}>
      <div {...stylex.props(s.categories)}>
        <div {...stylex.props(s.categoriesTitle)}>
          <h2>Categorías</h2>
        </div>
        <div>
          <Link href="#" {...stylex.props(s.categoriesUrl)}>
            <span>Ver todos</span>
          </Link>
        </div>
      </div>
      <div {...stylex.props(s.categoryItems)}>
        <ul {...stylex.props(s.unorderedList)}>
          <li {...stylex.props(s.liList)}>
            <Link href="#" {...stylex.props(s.itemLink)}>
              <div  {...stylex.props(s.liImage)}>
                <Image
                  {...stylex.props(s.categoriesImage)}
                  src={cars}
                  alt="compra y venta de carros y motos"
                  width={80}
                  height={80}
                />
              </div>
              <label {...stylex.props(s.liLabel)}>Carros y Motos</label>
            </Link>
          </li>
          <li {...stylex.props(s.liList)}>
            <Link href="#" {...stylex.props(s.itemLink)}>
              <div  {...stylex.props(s.liImage)}>
                <Image
                  {...stylex.props(s.categoriesImage)}
                  src={smartphones}
                  alt="compra y venta de teléfonos inteligentes"
                  width={80}
                  height={80}
                />
              </div>
              <label {...stylex.props(s.liLabel)}>Teléfonos Inteligentes</label>
            </Link>
          </li>
          <li {...stylex.props(s.liList)}>
            <Link href="#" {...stylex.props(s.itemLink)}>
              <div  {...stylex.props(s.liImage)}>
                <Image
                  {...stylex.props(s.categoriesImage)}
                  src={inmobiliario}
                  alt="compra y venta de propiedad raíz"
                  width={80}
                  height={80}
                />
              </div>
              <label {...stylex.props(s.liLabel)}>Inmobiliario</label>
            </Link>
          </li>
          <li {...stylex.props(s.liList)}>
            <Link href="#" {...stylex.props(s.itemLink)}>
              <div  {...stylex.props(s.liImage)}>
                <Image
                  {...stylex.props(s.categoriesImage)}
                  src={vestido}
                  alt="compra y venta de vestidos"
                  width={80}
                  height={80}
                />
              </div>
              <label {...stylex.props(s.liLabel)}>Moda y Belleza</label>
            </Link>
          </li>
          <li {...stylex.props(s.liList)}>
            <Link href="#" {...stylex.props(s.itemLink)}>
              <div  {...stylex.props(s.liImage)}>
                <Image
                  {...stylex.props(s.categoriesImage)}
                  src={houses}
                  alt="alt"
                  width={80}
                  height={80}
                />
              </div>
              <label {...stylex.props(s.liLabel)}>Casas y apartamentos y algo mas</label>
            </Link>
          </li>
          <li {...stylex.props(s.liList)}>
            <Link href="#" {...stylex.props(s.itemLink)}>
              <div  {...stylex.props(s.liImage)}>
                <Image
                  {...stylex.props(s.categoriesImage)}
                  src={houses}
                  alt="alt"
                  width={80}
                  height={80}
                />
              </div>
              <label {...stylex.props(s.liLabel)}>Casas y apartamentos y algo mas</label>
            </Link>
          </li>
          <li {...stylex.props(s.liList)}>
            <Link href="#" {...stylex.props(s.itemLink)}>
              <div  {...stylex.props(s.liImage)}>
                <Image
                  {...stylex.props(s.categoriesImage)}
                  src={houses}
                  alt="alt"
                  width={80}
                  height={80}
                />
              </div>
              <label {...stylex.props(s.liLabel)}>Casas y apartamentos y algo mas</label>
            </Link>
          </li>
          <li {...stylex.props(s.liList)}>
            <Link href="#" {...stylex.props(s.itemLink)}>
              <div  {...stylex.props(s.liImage)}>
                <Image
                  {...stylex.props(s.categoriesImage)}
                  src={houses}
                  alt="alt"
                  width={80}
                  height={80}
                />
              </div>
              <label {...stylex.props(s.liLabel)}>Casas y apartamentos y algo mas</label>
            </Link>
          </li>
          <li {...stylex.props(s.liList)}>
            <Link href="#" {...stylex.props(s.itemLink)}>
              <div  {...stylex.props(s.liImage)}>
                <Image
                  {...stylex.props(s.categoriesImage)}
                  src={houses}
                  alt="alt"
                  width={80}
                  height={80}
                />
              </div>
              <label {...stylex.props(s.liLabel)}>Casas y apartamentos y algo mas</label>
            </Link>
          </li>
          <li {...stylex.props(s.liList)}>
            <Link href="#" {...stylex.props(s.itemLink)}>
              <div  {...stylex.props(s.liImage)}>
                <Image
                  {...stylex.props(s.categoriesImage)}
                  src={houses}
                  alt="alt"
                  width={80}
                  height={80}
                />
              </div>
              <label {...stylex.props(s.liLabel)}>Casas y apartamentos y algo mas</label>
            </Link>
          </li>
          <li {...stylex.props(s.liList)}>
            <Link href="#" {...stylex.props(s.itemLink)}>
              <div  {...stylex.props(s.liImage)}>
                <Image
                  {...stylex.props(s.categoriesImage)}
                  src={houses}
                  alt="alt"
                  width={80}
                  height={80}
                />
              </div>
              <label {...stylex.props(s.liLabel)}>Casas y apartamentos y algo mas</label>
            </Link>
          </li>
          <li {...stylex.props(s.liList)}>
            <Link href="#" {...stylex.props(s.itemLink)}>
              <div  {...stylex.props(s.liImage)}>
                <Image
                  {...stylex.props(s.categoriesImage)}
                  src={houses}
                  alt="alt"
                  width={80}
                  height={80}
                />
              </div>
              <label {...stylex.props(s.liLabel)}>Casas y apartamentos y algo mas</label>
            </Link>
          </li>
          <li {...stylex.props(s.liList)}>
            <Link href="#" {...stylex.props(s.itemLink)}>
              <div  {...stylex.props(s.liImage)}>
                <Image
                  {...stylex.props(s.categoriesImage)}
                  src={houses}
                  alt="alt"
                  width={80}
                  height={80}
                />
              </div>
              <label {...stylex.props(s.liLabel)}>Casas y apartamentos y algo mas</label>
            </Link>
          </li>
          <li {...stylex.props(s.liList)}>
            <Link href="#" {...stylex.props(s.itemLink)}>
              <div  {...stylex.props(s.liImage)}>
                <Image
                  {...stylex.props(s.categoriesImage)}
                  src={houses}
                  alt="alt"
                  width={80}
                  height={80}
                />
              </div>
              <label {...stylex.props(s.liLabel)}>Casas y apartamentos y algo mas</label>
            </Link>
          </li>
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
    margin: "0 auto",
    maxWidth: $.maxWidth
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
    scrollbarColor: `transparent ${xBorderColor}`,
    "::-webkit-scrollbar": {
      width: "8px",
      height: "8px"
    },
    "::-webkit-scrollbar-thumb": {
      borderRadius: "8px",
      background: xBorderColor,
    },
  },
  unorderedList: {
    display: "inline-grid",
    gridAutoFlow: "column",
    gridGap: `${spacing.xs}`,
    listStyle: "none",
  },
  liList: {
    width: 100,
    cursor: "pointer",
  },
  itemLink: {
    fontSize: text.sm,
    color: "inherit",
    textDecoration: "none",
  },
  liImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  categoriesImage: {
    width: "80px",
    height: "80px",
    borderRadius: '50%',
  },
  liLabel: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  }
})
