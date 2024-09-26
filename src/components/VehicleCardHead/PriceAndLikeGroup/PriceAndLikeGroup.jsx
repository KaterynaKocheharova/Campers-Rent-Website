import { formatPrice } from "../../../utils/formatPrice";
import clsx from "clsx";
import css from "./PriceAndLikeGroup.module.css";

const PriceAndLikeGroup = ({ price, isFavorite = false }) => {
  const formattedPrice = formatPrice(price);
  return (
    <div className={css["flex"]}>
      <p className={css.price}>€{formattedPrice}</p>
      <svg className={clsx(css.icon, isFavorite && css.favorite)}>
        <use href="/sprite.svg#icon-heart"></use>
      </svg>
    </div>
  );
};

export default PriceAndLikeGroup;
