import VehicleCard from "../VehicleCard/VehicleCard";
import Error from "../common/Error/Error";
import css from "./VehiclesList.module.css";
import { useSelector } from "react-redux";
import { selectError } from "../../redux/vehicles/selectors";

const VehiclesList = ({ vehicles }) => {
  const error = useSelector(selectError);
  return (
    <>
      {!error ? (
        <ul className={css.list}>
          {vehicles.map((vehicleData) => (
            <VehicleCard key={vehicleData.id} vehicleData={vehicleData} />
          ))}
        </ul>
      ) : (
        <div className={css["error-container"]}>
          <Error>{error}</Error>
        </div>
      )}
    </>
  );
};

export default VehiclesList;
