import stylex from "@stylexjs/stylex"
import ProfileSvg from "../Assets/Icons/ProfileSvg";

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
    marginLeft: "8px"
  },
  icon: {
    marginRight: "8px",
  },
  text: {
    fontSize: "16px",
  },
});

