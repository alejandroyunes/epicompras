import stylex from "@stylexjs/stylex"
import LocationSvg from "./icons/LocationSvg";

interface IconTextProps {
  text: string;
}

export default function Location({ text }: IconTextProps) {
  return (
    <div className={stylex(styles.container)}>
      <div className={stylex(styles.icon)}><LocationSvg /></div>
      <div className={stylex(styles.text)}>{text}</div>
    </div>
  );
};

const styles = stylex.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    marginRight: "8px",
  },
  text: {
    fontSize: "16px",
  },
});

