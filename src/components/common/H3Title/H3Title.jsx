import clsx from "clsx";
import css from "./H3Title.module.css";

const H3Title = ({ children, extraClass }) => {
  return <h3 className={clsx(css.title, css[extraClass])}>{children}</h3>;
};

export default H3Title;
