"use client"
import * as stylex from "@stylexjs/stylex"

import CustomInput from "../ui/CustomInput"
import Image from "next/image"
import ventas from '../../Assets/images/ventas.jpg'
import Location from "../ui/Location"
import Notifications from "../ui/Notifications"
import Profile from "../ui/Profile"
import ButtonTheme from "../../button/ButtonTheme"

import { signIn, useSession } from "next-auth/react"
import { spacing } from "../../../app/globalTokens.stylex"
import ModePicker from "../ui/ModePicker"

export function DesktopNav() {
  const { data: session } = useSession()

  const onHandleClick = () => {
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
        <Location />
      </div>

      <div {...stylex.props(styles.right)}>
        <ModePicker />
        {session ?
          <>
            <Notifications />
            <Profile />
            <ButtonTheme onClick={onHandleClick}>Publicar</ButtonTheme>
          </>
          :
          <div {...stylex.props(styles.button)}>
            <ButtonTheme onClick={() => signIn()}>Entrar</ButtonTheme>
          </div>
        }
      </div>
    </nav>
  )
}

const styles = stylex.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: `${spacing.md} auto 0`,
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
  },
  button: {
    paddingLeft: spacing.xxs
  }
})
