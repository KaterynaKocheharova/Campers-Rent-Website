import clsx from "clsx";
import css from "./Text.module.css";

const Text = ({
  children,
  variant,
  extraClass,
}) => {
  return (
    <p
      className={clsx(
        css.text,
        variant === "dark" && css.dark,
        variant === "light" && css.light,
        extraClass && css[extraClass]
      )}
    >
      {children}
    </p>
  );
};

export default Text;
