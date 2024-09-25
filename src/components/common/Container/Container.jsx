import css from "./Conatiner.module.css";

const Container = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

export default Container;
