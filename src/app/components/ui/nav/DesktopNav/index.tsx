"use client"

import { globalTokens, media, spacing } from "../../../../globalTokens.stylex"
import * as stylex from "@stylexjs/stylex"

import CustomInput from "./CustomInput"
import Image from "next/image"
import ventas from './Assets/images/ventas.jpg'
import Location from "./Location"
import LanguagePicker from "./LanguagePicker"
import ModePicker from "./ModePicker"
import Messages from "./Messages"
import Notifications from "./Notifications"
import Profile from "./Profile"
import ButtonTheme from "../../button/ButtonTheme"

export function DesktopNav() {

  const onClick = () => {
    console.log("click")
  }

  return (
    <nav {...stylex.props(styles.container)}>

      <div  {...stylex.props(styles.left)}>
        <Image
          {...stylex.props(styles.logo)}
          src={ventas}
          alt="alt"
          width={30}
          height={30}
        />
        <CustomInput />
        <Location text="Medellîn" />
      </div>

      <div {...stylex.props(styles.right)}>
        <LanguagePicker />
        <ModePicker />
        <Messages />
        <Notifications />
        <Profile />
        <ButtonTheme onClick={onClick}>Publicar</ButtonTheme>
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
    padding: `0 ${spacing.md}`,
    outline: "1px solid red",
    width: {
      default: globalTokens.maxWidth,
    },
    margin: `${spacing.md} auto`,
  },
  logo: {
    marginRight: spacing.md
  },
  left: {
    display: "flex",
    alignItems: "center",
  },
  right: {
    display: "flex",
    alignItems: "center",
  }
})
