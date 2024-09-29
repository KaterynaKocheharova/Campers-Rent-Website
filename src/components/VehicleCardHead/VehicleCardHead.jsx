import Rating from "./Rating/Rating";
import Location from "./Location/Location";
import Price from "./Price/Price";
import AddToFavoritesButton from "./AddToFavoritesButton/AddToFavoritesButton";
import clsx from "clsx";
import css from "./VehicleCardHead.module.css";

// it's a separate component because DetailsPage and VehicleCard pages both have it with little differences

const VehicleCardHead = ({
  headData: { name, rating, location, price, reviews, id },
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
          <Rating rating={rating} reviews={reviews} variant={variant} />
          <Location location={location} />
        </div>
      </div>
      <div className={css["flex"]}>
        <Price price={price} />
        {variant == "card" && <AddToFavoritesButton id={id} />}
      </div>
    </div>
  );
};

export default VehicleCardHead;
