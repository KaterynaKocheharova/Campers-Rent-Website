import { useDispatch, useSelector } from "react-redux";
import {
  selectLocationFilter,
  selectVehicleEquipmentFilter,
  selectVehicleTypeFilter,
  selectVehicleTransmissionFilter,
} from "../../redux/filters/selectors";
import { changeLocationFilter } from "../../redux/filters/slice";
import { fetchVehicles } from "../../redux/vehicles/operations";
import { useId } from "react";
import css from "./LocationFilter.module.css";

const LocationFilter = () => {
  const filterInputId = useId();

  const location = useSelector(selectLocationFilter);
  const vehicleEquipment = useSelector(selectVehicleEquipmentFilter);
  const vehicleType = useSelector(selectVehicleTypeFilter);
  const transmission = useSelector(selectVehicleTransmissionFilter);

  const dispatch = useDispatch();

  const handleLocationFilterChange = (value) => {
    dispatch(changeLocationFilter(value));
  };

  const handleEnterClick = (e) => {
    if (e.key === "Enter") {
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
    }
  };

  return (
    <div className={css["location-group"]}>
      <label className={css.label} htmlFor={filterInputId}>
        Location
      </label>
      <div className={css["input-group"]}>
        <input
          value={location}
          className={css.input}
          id={filterInputId}
          type="text"
          placeholder="City"
          onChange={(e) => {
            handleLocationFilterChange(e.target.value);
          }}
          onKeyDown={handleEnterClick}
        />
        <svg className={css["map-icon"]}>
          <use href="/sprite.svg#icon-map"></use>
        </svg>
      </div>
    </div>
  );
};

export default LocationFilter;
