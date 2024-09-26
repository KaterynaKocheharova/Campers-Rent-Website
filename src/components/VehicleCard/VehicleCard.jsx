import VehicleImage from "../VehicleImage/VehicleImage";
import VehicleCardHead from "../VehicleCardHead/VehicleCardHead";
import css from "./VehicleCard.module.css";

const VehicleCard = ({ vehicleData }) => {
  const {
    id,
    name,
    description,
    gallery,
    price,
    rating,
    reviews,
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    location,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
  } = vehicleData;

  return (
    <div className={css.card}>
      <div className={css["card-layout"]}>
        <VehicleImage url={gallery[0].thumb} />
        <div className={css["card-right"]}>
          <VehicleCardHead
            headData={{ name, rating, location, price, reviews }}
            variant="card"
          />
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
