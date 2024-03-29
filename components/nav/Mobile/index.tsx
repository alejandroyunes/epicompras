"use client"

import * as stylex from "@stylexjs/stylex"

import CustomInput from "../ui/CustomInput"
import Image from "next/image"
import ventas from '../../Assets/images/ventas.jpg'
import Location from "../ui/Location"
import ModePicker from "../ui/ModePicker"
import Notifications from "../ui/Notifications"
import Profile from "../ui/Profile"
import HamburgerSvg from "../../Assets/Icons/HamburgerSvg"
import ButtonTheme from "../../button/ButtonTheme"
import { spacing } from "../../../app/globalTokens.stylex"
import { useSession } from "next-auth/react"

export function MobileNav() {
  const { data: session } = useSession()

  const onClick = () => {
    console.log("click")
  }

  return (
    <nav {...stylex.props(styles.container)}>

      <div  {...stylex.props(styles.up)}>
        <div>
          <HamburgerSvg />
          <Image
            {...stylex.props(styles.logo)}
            src={ventas}
            alt="alt"
            width={30}
            height={30}
          />
        </div>
        <div {...stylex.props(styles.upItems)}>
          <Location />
          <ModePicker />

          {!session ?
            <div {...stylex.props(styles.buttonContainer)}>
              <ButtonTheme onClick={onClick}>Entrar</ButtonTheme>
            </div>
            :
            <Notifications />
          }
        </div>
      </div>

      <div {...stylex.props(styles.down)}>
        <div {...stylex.props(styles.input)} >
          <CustomInput />
        </div>

        <div {...stylex.props(styles.downItems)}>
          {!session ? null : <Profile />}
        </div>

      </div>
    </nav >
  )
}

const styles = stylex.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
    width: "100%",
    margin: `${spacing.md} auto 0`,
  },
  logo: {
    marginRight: spacing.md
  },
  up: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  down: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  downItems: {
    display: "flex"
  },
  upItems: {
    display: "flex",
    alignItems: "center",
  },
  buttonContainer: {
    paddingLeft: spacing.xs
  },
  input: {
    width: "100%",
  }
})
