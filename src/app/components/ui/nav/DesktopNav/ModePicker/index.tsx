import stylex from "@stylexjs/stylex"
import ModeSvg from "../Assets/Icons/ModeSvg"



export default function ModePicker() {
  return (
    <div className={stylex(styles.container)}>

      <div className={stylex(styles.icon)}>
        <ModeSvg />
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
})

