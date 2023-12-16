import stylex from "@stylexjs/stylex"
import MessagesSvg from "../Assets/Icons/MessagesSvg";

export default function Messages() {
  return (
    <div className={stylex(styles.container)}>

      <div className={stylex(styles.icon)}>
        <MessagesSvg />
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

