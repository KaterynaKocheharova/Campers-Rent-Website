import clsx from "clsx";
import css from "./ThickText.module.css";

const TickText = ({ children, extraClass }) => {
  return <p className={clsx(css.text, css[extraClass])}>{children}</p>;
};

export default TickText;
