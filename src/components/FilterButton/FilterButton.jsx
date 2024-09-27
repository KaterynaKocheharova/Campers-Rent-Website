import clsx from "clsx";
import css from "./FilterButton.module.css";
import { getFilterButtonName } from "./getFilterButtonName";

const FilterButton = ({
  isSelected,
  changeFilterHandler,
  filterData: { icon, name },
}) => {
  const filterName = getFilterButtonName(name);
  return (
    <button
      className={clsx(css.button, isSelected && css["selected-button"])}
      onClick={changeFilterHandler}
    >
      <svg className={css.icon}>
        <use href={`/sprite.svg#${icon}`}></use>
      </svg>
      {<p className={css.text}>{filterName}</p>}
    </button>
  );
};

export default FilterButton;
