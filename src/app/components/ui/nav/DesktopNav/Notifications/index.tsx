import stylex from "@stylexjs/stylex"
import BellSvg from "../Assets/Icons/BellSvg";
import { spacing } from "../../../../../globalTokens.stylex"

export default function Notifications() {
  return (
    <div className={stylex(styles.container)}>

      <div className={stylex(styles.icon)}>
        <BellSvg />
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
});

