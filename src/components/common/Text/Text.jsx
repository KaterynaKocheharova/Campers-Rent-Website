import clsx from "clsx";
import css from "./Text.module.css";

const Text = ({ children }) => {
    return <p className={clsx(css.text)}>{children}</p>;
};

export default Text;
