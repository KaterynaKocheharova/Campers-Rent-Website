import clsx from "clsx";
import css from "./FilterButton.module.css";

const FilterButton = ({
  isSelected,
  changeFilterHandler,
  filterData: { icon, name },
}) => {
  return (
    <button
      className={clsx(css.button, isSelected && css["selected-button"])}
      onClick={changeFilterHandler}
    >
        <svg className={css.icon}>
          <use href={`/sprite.svg#${icon}`}></use>
        </svg>
        <p className={css.text}>{name}</p>
    </button>
  );
};

export default FilterButton;
