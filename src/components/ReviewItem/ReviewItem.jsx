import Avatar from "./Avatar/Avatar";

import css from "./ReviewItem";

const ReviewItem = ({ reviewData: {reviewer_name} }) => {
  return (
    <li className={css.item}>
      <Avatar name={reviewer_name}  />
    </li>
  );
};

export default ReviewItem;
