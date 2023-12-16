// import { DARK_MODE, globalTokens } from "@/app/globalTokens.stylex"
import { DARK_MODE, globalTokens } from "../../../../globalTokens.stylex"
import * as stylex from "@stylexjs/stylex"
import CustomInput from "./CustomInput"
export function DesktopNav() {

  return (
    <nav {...stylex.props(styles.container)}>
      <div  {...stylex.props(styles.left)}>

        <CustomInput />
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
  main: {
    display: "flex",
  }
})

