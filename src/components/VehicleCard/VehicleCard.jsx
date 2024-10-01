import { useLocation } from "react-router-dom";
import VehicleImage from "../VehicleImage/VehicleImage";
import VehicleCardHead from "../VehicleCardHead/VehicleCardHead";
import Text from "../common/Text/Text";
import CategoriesList from "../CategoriesList/CategoriesList";
import Button from "../common/Button/Button";
import { useGetAvailableCategories } from "../../hooks/useGetAvailableCategories";

import css from "./VehicleCard.module.css";

const VehicleCard = ({ vehicleData }) => {
  const availableCategories = useGetAvailableCategories(vehicleData);
  const currentLocation = useLocation();

  const {
    name,
    rating,
    location,
    price,
    reviews,
    id,
    gallery,
    description,
    transmission,
    engine,
  } = vehicleData;

  return (
    <div className={css.card}>
      <div className={css["card-layout"]}>
        <VehicleImage url={gallery[0].thumb} />
        <div className={css["card-right"]}>
          <VehicleCardHead
            headData={{
              name,
              rating,
              location,
              price,
              reviews,
              id,
            }}
            variant="card"
          />
          <div className={css["card-body"]}>
            <Text variant="light" extraClass="ellipsis">
              {description}
            </Text>
            <CategoriesList
              variant="card"
              availableCategories={availableCategories}
              transmission={transmission}
              engine={engine}
            />
            <Button extraClass="show-more-link" vehicleId={id} currentLocation={currentLocation}>
              Show more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
