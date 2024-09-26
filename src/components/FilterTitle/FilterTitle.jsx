import H3Title from "../common/H3Title/H3Title";
import css from "./FilterTitle.module.css";

const FilterTitle = ({ children }) => {
  return (
    <div className={css["title-container"]}>
      <H3Title>{children}</H3Title>
    </div>
  );
};

export default FilterTitle;
