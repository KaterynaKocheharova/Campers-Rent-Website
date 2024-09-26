import { Link } from "react-router-dom";
import clsx from "clsx";
import css from "./Button.module.css";

const Button = ({ children, extraClass, vehicleId, handleClick }) => {
  if (extraClass === "hero-link") {
    return (
      <Link className={clsx(css.button, css["hero-link"])} to="/catalog">
        {children}
      </Link>
    );
  }

  if (extraClass === "show-more-link") {
    return (
      <Link
        className={clsx(css.button, css["show-more-link"])}
        to={`/catalog/${vehicleId}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={clsx(css.button, extraClass && css[extraClass])}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
