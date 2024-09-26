import Rating from "./Rating/Rating";
import Location from "./Location/Location";
import PriceAndLikeGroup from "./PriceAndLikeGroup/PriceAndLikeGroup";
import clsx from "clsx";
import css from "./VehicleCardHead.module.css";

const VehicleCardHead = ({
  headData: { name, rating, location, price, reviews },
  variant,
}) => {
  return (
    <div
      className={clsx(
        css["card-head-container"],
        variant === "card" && css["card-head-container-row"]
      )}
    >
      <div>
        <h2 className={css["title"]}>{name}</h2>
        <div className={css["rating-location-flex"]}>
          <Rating rating={rating} reviews={reviews} />
          <Location location={location} />
        </div>
      </div>
      <PriceAndLikeGroup price={price} />
    </div>
  );
};

export default VehicleCardHead;
