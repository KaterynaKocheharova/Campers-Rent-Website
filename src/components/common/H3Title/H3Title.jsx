import css from "./H3Title.module.css";

const H3Title = ({ children }) => {
  return <h3 className={css.title}>{children}</h3>;
};

export default H3Title;
