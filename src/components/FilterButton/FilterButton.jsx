import css from "./FilterButton.module.css";

const FilterButton = ({ variant, filterData: { name, icon } }) => {
  return (
    <button className={css.button}>
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
