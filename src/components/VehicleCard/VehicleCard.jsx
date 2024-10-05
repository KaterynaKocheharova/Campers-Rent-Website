import VehicleImage from "../VehicleImage/VehicleImage";
import VehicleCardHead from "../VehicleCardHead/VehicleCardHead";
import Text from "../common/Text/Text";
import CategoriesList from "../CategoriesList/CategoriesList";
import Button from "../common/Button/Button";
import { useGetAvailableCategories } from "../../hooks/useGetAvailableCategories";

import css from "./VehicleCard.module.css";

const VehicleCard = ({ vehicleData }) => {
  const availableCategories = useGetAvailableCategories(vehicleData);

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
    <li className={css.card}>
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
              availableCategories={availableCategories}
              transmission={transmission}
              engine={engine}
            />
            <Button
              variant="link"
              extraClass="show-more-link"
              to={`${vehicleData.id}`}
            >
              Show more
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default VehicleCard;
