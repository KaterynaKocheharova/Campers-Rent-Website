import clsx from "clsx";
import css from "./Text.module.css";

const Text = ({
  children,
  variant,
  addEllipsis = false,
  isUnderlined = false,
  extraClass,
}) => {
  return (
    <p
      className={clsx(
        css.text,
        variant === "dark" && css.dark,
        variant === "light" && css.light,
        addEllipsis && css.ellipses,
        isUnderlined && css.underlined,
        extraClass && css[extraClass]
      )}
    >
      {children}
    </p>
  );
};

export default Text;
