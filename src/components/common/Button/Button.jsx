import { Link } from "react-router-dom";
import clsx from "clsx";
import css from "./Button.module.css";

const Button = ({ children, extraClass }) => {
  if (extraClass === "hero-link") {
    return (
      <Link className={clsx(css.button, css["hero-link"])} to="/catalog">
        {children}
      </Link>
    );
  }
  return (
    <button className={clsx(css.button, extraClass && css[extraClass])} type="submit">
      {children}
    </button>
  );
};

export default Button;
