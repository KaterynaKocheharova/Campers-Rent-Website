import VehicleCard from "../VehicleCard/VehicleCard";
import css from "./VehiclesList.module.css";

const VehiclesList = ({ vehicles }) => {
  return (
    <ul className={css.list}>
      {vehicles.map((vehicleData) => (
        <VehicleCard key={vehicleData.id} vehicleData={vehicleData} />
      ))}
    </ul>
  );
};

export default VehiclesList;
