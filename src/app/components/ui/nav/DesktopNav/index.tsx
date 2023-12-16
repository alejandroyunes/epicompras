import { globalTokens } from "../../../../globalTokens.stylex"
import * as stylex from "@stylexjs/stylex"
import CustomInput from "./CustomInput"
import Image from "next/image"
import ventas from './images/ventas.jpg'
import Location from "./Location"

export function DesktopNav() {
  return (
    <nav {...stylex.props(styles.container)}>

      <div  {...stylex.props(styles.left)}>
        <Image
          {...stylex.props(styles.image)}
          src={ventas}
          alt="alt"
          width={30}
          height={30}
        />
        <CustomInput />
        <Location text="Medellîn" />
      </div>

      <div>
        <h1>rest of things</h1>
      </div>
    </nav >
  )
}

const styles = stylex.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    padding: "0 24px",
    outline: "1px solid red",
    width: globalTokens.maxWidth,
    margin: "0 auto",
  },
  left: {
    display: "flex",
    alignItems: "center",
  },
  image: {
    marginRight: 24
  },
  main: {
    display: "flex",
  }
})

