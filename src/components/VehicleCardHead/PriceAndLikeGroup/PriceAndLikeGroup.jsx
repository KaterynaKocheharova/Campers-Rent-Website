import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../../../redux/favorite/slice";
import { selectFavIds } from "../../../redux/favorite/selectors";
import { formatPrice } from "../../../utils/formatPrice";
import clsx from "clsx";
import css from "./PriceAndLikeGroup.module.css";

const PriceAndLikeGroup = ({ price, variant, id }) => {
  const favIds = useSelector(selectFavIds);
  const isFavorite = useMemo(() => favIds.includes(id), [favIds, id]);


  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleFavorite(id));
  };

  const formattedPrice = formatPrice(price);
  return (
    <div className={css["flex"]}>
      <p className={css.price}>€{formattedPrice}</p>
      {variant === "card" && (
        <svg
          onClick={handleClick}
          className={clsx(css.icon, isFavorite && css.favorite)}
        >
          <use href="/sprite.svg#icon-heart"></use>
        </svg>
      )}
    </div>
  );
};

export default PriceAndLikeGroup;
