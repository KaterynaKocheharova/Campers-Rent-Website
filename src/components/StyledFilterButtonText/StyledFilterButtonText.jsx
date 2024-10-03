import css from "./StyledFilterButtonText.module.css";

const StyledFilterButtonText = ({ children }) => {
  return <p className={css.text}>{children}</p>;
};

export default StyledFilterButtonText;
