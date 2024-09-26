import clsx from "clsx";
import css from "./FilterButton.module.css";

const FilterButton = ({
  isSelected,
  changeFilterHandler,
  filterData: { icon },
}) => {
  return (
    <button
      className={clsx(css.button, isSelected && css["selected-button"])}
      onClick={changeFilterHandler}
    >
      <div className={css.flex}>
        <svg className={css.icon}>
          <use href={`/sprite.svg#${icon}`}></use>
        </svg>
        <p className={css.text}>{name}</p>
      </div>
    </button>
  );
};

export default FilterButton;
