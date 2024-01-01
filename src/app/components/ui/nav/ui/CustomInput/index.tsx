"use-client"

import stylex from "@stylexjs/stylex"
import { InputHTMLAttributes, useState } from "react"
import SearchIcon from "../../../Assets/Icons/SearchISvg"
import { globalTokens as $, spacing, text } from "./../../../../../globalTokens.stylex"
import ArrowRightSvg from "../../../Assets/Icons/ArrowRightSvg"

interface Props extends InputHTMLAttributes<HTMLInputElement> { }

export default function CustomInput(props: Props) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form submitted', inputValue);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  return (
    <div {...stylex.props(styles.main)}>
      <div {...stylex.props(styles.icon)}>
        <SearchIcon />
      </div>
      <form onSubmit={handleSubmit}>
        <input {...stylex.props(styles.input)} type="text" placeholder="Buscar" onChange={handleChange} value={inputValue} {...props} />
      </form>
      <div {...stylex.props(styles.arrow)} onClick={handleSubmit}>
        <ArrowRightSvg />
      </div>
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
  arrow: {
    borderLeft: "2px solid red",
    cursor: "pointer",
    position: "absolute",
    top: "50%",
    right: 8,
    transform: "translateY(-50%)",
  },
})