import { useDispatch, useSelector } from "react-redux";
import { selectLocationFilter } from "../../redux/filters/selectors";
import { changeLocationFilter } from "../../redux/filters/slice";
import { useId } from "react";
import css from "./LocationFilter.module.css";

const LocationFilter = () => {
  const filterInputId = useId();

  
  const location = useSelector(selectLocationFilter);
  const dispatch = useDispatch();

  const handleLocationFilterChange = (value) => {
    dispatch(changeLocationFilter(value));
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
        />
        <svg className={css["map-icon"]}>
          <use href="/sprite.svg#icon-map"></use>
        </svg>
      </div>
    </div>
  );
};

export default LocationFilter;
