import stylex from "@stylexjs/stylex"
import ProfileSvg from "../Assets/Icons/ProfileSvg";
import { spacing } from "../../../../../globalTokens.stylex"

export default function Profile() {
  return (
    <div className={stylex(styles.container)}>

      <div className={stylex(styles.icon)}>
        <ProfileSvg />
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

