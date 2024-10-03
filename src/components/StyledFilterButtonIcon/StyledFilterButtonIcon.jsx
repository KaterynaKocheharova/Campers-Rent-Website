import css from "./StyledFilterButtonIcon.module.css";

const StyledFilterButtonIcon = ({ path }) => {
  return (
    <svg className={css.icon}>
      <use href={path}></use>
    </svg>
  );
};

export default StyledFilterButtonIcon;
