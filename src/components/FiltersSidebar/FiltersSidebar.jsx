import { useDispatch, useSelector } from "react-redux";
import { fetchVehicles } from "../../redux/vehicles/operations";
import {cleanVehicles} from "../../redux/vehicles/slice";
import {
  selectLocationFilter,
  selectVehicleEquipmentFilter,
  selectVehicleTransmissionFilter,
  selectVehicleTypeFilter,
} from "../../redux/filters/selectors";
import LocationFilter from "../LocationFilter/LocationFilter";
import EquipmentFilter from "../EquipmentFilter/EquipmentFilter";
import VehicleTypeFilter from "../VehicleTypeFilter/VehicleTypeFilter";
import Button from "../common/Button/Button";
import css from "./FiltersSidebar.module.css";

const FiltersSidebar = () => {
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
    <section className={css["filters-sidebar"]}>
      <LocationFilter />
      <h2 className={css["filters-title"]}>Filters</h2>
      <EquipmentFilter />
      <VehicleTypeFilter />
      <Button handleClick={handleSearchByFilter} extraClass="search-button">
        Search
      </Button>
    </section>
  );
};

export default FiltersSidebar;
