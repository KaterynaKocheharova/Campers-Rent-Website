import Avatar from "./Avatar/Avatar";
import ThickText from "../common/ThickText/TickText";
import RatingStars from "./RatingStars/RatingStars";
import css from "./ReviewItem.module.css";

const ReviewItem = ({ reviewData: { reviewer_name, reviewer_rating } }) => {
  return (
    <li className={css.item}>
      <div className={css["top-flex"]}>
        <Avatar name={reviewer_name} />
        <div className={css["right-flex"]}>
          <ThickText>{reviewer_name}</ThickText>
          <RatingStars rating={reviewer_rating} />
        </div>
      </div>
    </li>
  );
};

export default ReviewItem;
