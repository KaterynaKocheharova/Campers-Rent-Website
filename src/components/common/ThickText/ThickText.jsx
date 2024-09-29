import clsx from "clsx";
import css from "./ThickText.module.css";

const ThickText = ({ children, extraClass }) => {
  return <p className={clsx(css.text, css[extraClass])}>{children}</p>;
};

export default ThickText;
