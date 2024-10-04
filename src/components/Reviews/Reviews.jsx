import { useRef } from "react";
import { useFetchVehicleDetails } from "../../hooks/useFetchVehicleDetails";
import ReviewItem from "../ReviewItem/ReviewItem";
import css from "./Reviews.module.css";

const Reviews = () => {
  const { vehicleData } = useFetchVehicleDetails();

  const { reviews } = vehicleData || {};

  const componentRef = useRef();

  return (
    <ul ref={componentRef} className={css.list}>
      {reviews &&
        reviews.length > 0 &&
        reviews.map((review, index) => (
          <ReviewItem key={index} reviewData={review} />
        ))}
    </ul>
  );
};

export default Reviews;
