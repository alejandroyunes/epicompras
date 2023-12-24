import stylex from "@stylexjs/stylex"
import ArrowDownSvg from "../Assets/Icons/ArrowDownSvg"
import { globalTokens, spacing, text } from "../../../../../globalTokens.stylex"


export default function LanguagePicker() {
  return (
    <div className={stylex(styles.container)}>

      <div className={stylex(styles.text)}>Español</div>
      <div className={stylex(styles.icon)}>
        <ArrowDownSvg />
      </div>
    </div>
  );
};

const styles = stylex.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    marginRight: spacing.xxs,
  },
  text: {
    fontSize: text.p,
    paddingRight: spacing.xxs,
    fontFamily: globalTokens.fontSans
  },
});

