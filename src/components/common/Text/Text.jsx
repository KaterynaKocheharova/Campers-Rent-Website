import clsx from "clsx";
import css from "./Text.module.css";

const Text = ({ children, variant }) => {
  return (
    <p className={clsx(css.text, variant === "dark" && css.dark)}>{children}</p>
  );
};

export default Text;
