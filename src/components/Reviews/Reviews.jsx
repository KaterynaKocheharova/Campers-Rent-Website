import { useFetchVehicleDetails } from "../../hooks/useFetchVehicleDetails";
import ReviewItem from "../ReviewItem/ReviewItem";
import css from "./Reviews.module.css";

const Reviews = () => {
  const { vehicleData } = useFetchVehicleDetails();

  const { reviews } = vehicleData || {};

  return (
    <ul className={css.list}>
      {reviews &&
        reviews.length > 0 &&
        reviews.map((review, index) => (
          <ReviewItem key={index} reviewData={review} />
        ))}
    </ul>
  );
};

export default Reviews;
