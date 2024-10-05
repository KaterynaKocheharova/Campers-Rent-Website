import { Link } from "react-router-dom";
import clsx from "clsx";
import css from "./Button.module.css";

const Button = ({
  children,
  extraClass,
  handleClick,
  disabled,
  variant,
  ...props
}) => {
  if (variant === "link") {
    return (
      <Link
        className={clsx(css.button, css[extraClass])}
        to="/catalog"
        {...props}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        onClick={handleClick}
        className={clsx(
          css.button,
          extraClass && css[extraClass],
          disabled && css.disabled
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
};

export default Button;
