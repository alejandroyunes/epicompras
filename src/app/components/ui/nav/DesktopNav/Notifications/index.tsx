import stylex from "@stylexjs/stylex"
import BellSvg from "../Assets/Icons/BellSvg";

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
    marginLeft: "8px"
  },
  icon: {
    marginRight: "8px",
  },
  text: {
    fontSize: "16px",
  },
});

