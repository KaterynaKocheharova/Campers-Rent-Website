import clsx from "clsx";
import css from "./Text.module.css";

const Text = ({ children, variant, addEllipsis = false, isUnderlined = false }) => {
  return (
    <p
      className={clsx(
        css.text,
        variant === "dark" && css.dark,
        variant === "light" && css.light,
        addEllipsis && css.ellipses,
        isUnderlined && css.underlined
      )}
    >
      {children}
    </p>
  );
};

export default Text;
