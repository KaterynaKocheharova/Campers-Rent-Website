import Avatar from "./Avatar/Avatar";
import ThickText from "../common/ThickText/ThickText";
import RatingStars from "./RatingStars/RatingStars";
import Text from "../common/Text/Text";

import css from "./ReviewItem.module.css";

const ReviewItem = ({
  reviewData: { reviewer_name, reviewer_rating, comment },
}) => {
  return (
    <li className={css.item}>
      <div className={css["top-flex"]}>
        <Avatar name={reviewer_name} />
        <div className={css["right-flex"]}>
          <ThickText>{reviewer_name}</ThickText>
          <RatingStars rating={reviewer_rating} />
        </div>
      </div>
      <Text variant="light">{comment}</Text>
    </li>
  );
};

export default ReviewItem;
