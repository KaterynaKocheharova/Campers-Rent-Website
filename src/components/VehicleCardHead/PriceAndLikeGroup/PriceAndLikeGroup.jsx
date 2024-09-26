import clsx from "clsx";
import css from "./PriceAndLikeGroup.module.css";

const PriceAndLikeGroup = ({ price, isFavorite = false }) => {
  return (
    <div className={css["flex"]}>
      <p className={css.price}>{price}</p>
      <svg className={clsx(css.icon, isFavorite && css.favorite)}>
        <use href="/sprite.svg#icon-heart"></use>
      </svg>
    </div>
  );
};

export default PriceAndLikeGroup;
