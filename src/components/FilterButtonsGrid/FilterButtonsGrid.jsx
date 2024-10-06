import StyledFormErrorMessage from "../common/StyledFormErrorMessage/StyledFormErrorMessage";
import css from "./FilterButtonsGrid.module.css";

const FilterButtonsGrid = ({ children, name }) => {
  return (
    <div className={css.relative}>
      <ul className={css.grid}>{children}</ul>
      <StyledFormErrorMessage name={name} component="p" />
    </div>
  );
};

export default FilterButtonsGrid;
