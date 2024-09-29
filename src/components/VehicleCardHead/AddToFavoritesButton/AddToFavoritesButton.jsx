import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../../../redux/favorite/slice";
import { selectFavIds } from "../../../redux/favorite/selectors";
import clsx from "clsx";
import css from "./AddToFavoritesButton.module.css";

const AddToFavoritesButton = ({ id }) => {
  const favIds = useSelector(selectFavIds);
  const isFavorite = useMemo(() => favIds.includes(id), [favIds, id]);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleFavorite(id));
  };

  return (
    <svg
      onClick={handleClick}
      className={clsx(css.icon, isFavorite && css.favorite)}
    >
      <use href="/sprite.svg#icon-heart"></use>
    </svg>
  );
};

export default AddToFavoritesButton;
