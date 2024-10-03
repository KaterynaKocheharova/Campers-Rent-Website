import StyledErrorMessage from "../StyledErrorMessage/StyledErrorMessage";
import css from "./FilterButtonsGrid.module.css";

const FilterButtonsGrid = ({ children, name }) => {
  return (
    <div className={css.relative}>
      <ul className={css.grid}>{children}</ul>
      <StyledErrorMessage name={name} component="p" />
    </div>
  );
};

export default FilterButtonsGrid;
