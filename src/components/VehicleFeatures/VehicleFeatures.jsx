import { useFetchVehicleDeatils } from "../../hooks/useFetchVehicleDetails";
import { useGetAvailableCategories } from "../../hooks/useGetAvailableCategories";
import CategoriesList from "../CategoriesList/CategoriesList";
import css from "./VehicleFeatures.module.css";

const VehicleFeatures = () => {
  const { vehicleData } = useFetchVehicleDeatils();

  const { engine, transmission } = vehicleData || {};

  const availableCategories = useGetAvailableCategories(vehicleData);

  return (
    <div className={css["features-container"]}>
      <div className={css["features-content"]}>
        <CategoriesList
          availableCategories={availableCategories}
          engine={engine}
          transmission={transmission}
        />
      </div>
    </div>
  );
};

export default VehicleFeatures;
