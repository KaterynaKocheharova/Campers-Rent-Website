import Text from "../../common/Text/Text";
import css from "./Rating.module.css";

const Rating = ({ rating, reviews, variant }) => {
  return (
    <div className={css.rating}>
      <svg className={css.icon}>
        <use href="/sprite.svg#icon-star"></use>
      </svg>
      <Text variant="dark" extraClass={variant === "details" ? "underlined" : ""}>
        {rating}({reviews.length} Reviews)
      </Text>
    </div>
  );
};

export default Rating;
