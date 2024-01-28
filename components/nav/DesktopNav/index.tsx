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
import { globalTokens, spacing } from "../../../app/globalTokens.stylex"
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
          <ButtonTheme onClick={() => signIn()}>Entrar</ButtonTheme>
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
    padding: `0 ${spacing.md}`,
    width: {
      default: globalTokens.maxWidth,
      "@media (min-width: 701px) and (max-width: 1260px)": "100%",
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
