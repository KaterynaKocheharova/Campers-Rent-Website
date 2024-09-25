import { Link } from "react-router-dom";
import clsx from "clsx";
import css from "./Button.module.css";

const Button = ({ children, variant }) => {
  if (variant === "hero-link") {
    return (
      <Link className={clsx(css.button, css["hero-link"])} to="/catalog">
        {children}
      </Link>
    );
  }
  return <button className={clsx(css.button)}>{children}</button>;
};

export default Button;
