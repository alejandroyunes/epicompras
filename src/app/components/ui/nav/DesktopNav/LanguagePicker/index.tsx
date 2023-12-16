import stylex from "@stylexjs/stylex"
import ArrowDownSvg from "../Assets/Icons/ArrowDownSvg";



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
    marginLeft: "8px"
  },
  icon: {
    marginRight: "8px",
  },
  text: {
    fontSize: "16px",
  },
});

