import css from "./CategoryItem.module.css";

const CategoryItem = ({ icon, text }) => {
  return (
    <div className={css.item}>
      <svg className={css.icon}>
        <use href={`/sprite.svg#${icon}`}></use>
      </svg>
      <p className={css.text}>{text}</p>
    </div>
  );
};

export default CategoryItem;
