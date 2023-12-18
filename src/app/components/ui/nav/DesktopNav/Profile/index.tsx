import stylex from "@stylexjs/stylex"
import ProfileSvg from "../Assets/Icons/ProfileSvg";
import { spacing } from "../../../../../globalTokens.stylex"

export default function Profile() {
  return (
    <div className={stylex(styles.container)}>

      <div className={stylex(styles.icon)}>

        <details >
          <summary role="button">
            <ProfileSvg />
          </summary>
          <ul>
            <li><a href="#">I'm a dropdown.</a></li>
            <li><a href="#">In Pure CSS</a></li>
            <li><a href="#">As in...</a></li>
            <li><a href="#">No JavaScript.</a></li>
            <li><a href="#">At All.</a></li>
          </ul>
        </details>
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