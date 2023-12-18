import stylex from "@stylexjs/stylex"
import LocationSvg from "./icons/LocationSvg"
import { globalTokens, spacing, text } from "../../../../../globalTokens.stylex"

interface IconTextProps {
  text: string;
}

export default function Location({ text }: IconTextProps) {
  return (
    <div className={stylex(styles.container)}>
      <div className={stylex(styles.icon)}>
        <LocationSvg />
      </div>
      <div className={stylex(styles.text)}>
        {text}
      </div>
    </div>
  );
};

const styles = stylex.create({
  container: {
    display: "flex",
    alignItems: "center",
    marginLeft: spacing.xs,
  },
  icon: {
    marginRight: spacing.xs,
  },
  text: {
    fontSize: text.p,
    fontFamily: globalTokens.fontSans
  },
})

