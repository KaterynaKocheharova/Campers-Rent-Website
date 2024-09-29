import { useDispatch, useSelector } from "react-redux";
import { fetchVehicles } from "../../redux/vehicles/operations";
import { cleanVehicles } from "../../redux/vehicles/slice";
import {
  selectLocationFilter,
  selectVehicleEquipmentFilter,
  selectVehicleTransmissionFilter,
  selectVehicleTypeFilter,
} from "../../redux/filters/selectors";
import Button from "../common/Button/Button";

const FilterSearchButton = () => {
  const dispatch = useDispatch();
  const location = useSelector(selectLocationFilter);
  const vehicleEquipment = useSelector(selectVehicleEquipmentFilter);
  const vehicleType = useSelector(selectVehicleTypeFilter);
  const transmission = useSelector(selectVehicleTransmissionFilter);

  const handleSearchByFilter = () => {
    dispatch(cleanVehicles());
    dispatch(
      fetchVehicles({
        page: 1,
        limit: 4,
        filters: {
          location,
          vehicleEquipment,
          vehicleType,
          transmission,
        },
      })
    );
  };
  
  return (
    <div>
      <Button handleClick={handleSearchByFilter} extraClass="search-button">
        Search
      </Button>
    </div>
  );
};

export default FilterSearchButton;
