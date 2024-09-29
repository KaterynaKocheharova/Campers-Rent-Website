import { formatPrice } from "../../../utils/formatPrice";
import css from "./Price.module.css";

const PriceAndLikeGroup = ({ price }) => {
  const formattedPrice = formatPrice(price);
  return <p className={css.price}>€{formattedPrice}</p>;
};

export default PriceAndLikeGroup;
