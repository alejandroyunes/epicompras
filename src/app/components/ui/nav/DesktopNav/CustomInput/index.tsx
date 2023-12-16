import stylex from "@stylexjs/stylex"
import { InputHTMLAttributes } from "react"
import SearchIcon from "./icons/SearchISvg"

interface Props extends InputHTMLAttributes<HTMLInputElement> { }

export default function CustomInput(props: Props) {
  return (
    <div className={stylex(styles.main)}>
      <div className={stylex(styles.icon)}><SearchIcon /></div>
      <input {...stylex.props(styles.input)} type="text" placeholder="buscar" {...props} />
    </div>
  )
}

const styles = stylex.create({
  main: {
    display: "flex",
    position: "relative",
  },
  icon: {
    position: "absolute",
    top: "50%",
    left: "10px",
    transform: "translateY(-50%)",
    zIndex: 1,
  },
  input: {
    border: "2px solid #ccc",
    borderRadius: "12px",
    fontSize: "16px",
    width: "100%",
    padding: "12px 20px",
    boxSizing: "border-box",
    paddingLeft: "40px",
  },
})