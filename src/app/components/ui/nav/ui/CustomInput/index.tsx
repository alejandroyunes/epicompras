import stylex from "@stylexjs/stylex"
import { InputHTMLAttributes } from "react"
import SearchIcon from "../Assets/Icons/SearchISvg"
import { globalTokens as $, spacing, text } from "./../../../../../globalTokens.stylex"

interface Props extends InputHTMLAttributes<HTMLInputElement> { }

export default function CustomInput(props: Props) {
  return (
    <div {...stylex.props(styles.main)}>
      <div {...stylex.props(styles.icon)}>
        <SearchIcon />
      </div>
      <input {...stylex.props(styles.input)} type="text" placeholder="Buscar" {...props} />
    </div>
  )
}
const xBorderColor = `rgba(${$.calloutBorderR}, ${$.calloutBorderG}, ${$.calloutBorderB}, 0.3)`

const styles = stylex.create({
  main: {
    display: "flex",
    position: "relative",
  },
  icon: {
    position: "absolute",
    top: "50%",
    left: 8,
    transform: "translateY(-50%)",
  },
  input: {
    borderStyle: "solid",
    borderColor: xBorderColor,
    borderWidth: {
      default: "2px",
    },
    borderRadius: spacing.xs,
    fontSize: text.p,
    padding: `${spacing.xxs} ${spacing.xs}`,
    boxSizing: "border-box",
    paddingLeft: spacing.xl,
    width: "100%",
  },
})