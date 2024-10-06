import css from "./RelativeContainer.module.css";

const RelativeContainer = ({ children }) => {
  return <div className={css.relative}>{children}</div>;
};

export default RelativeContainer;
