import { useDispatch, useSelector } from "react-redux";
import { selectLocationFilter } from "../../redux/filters/selectors";
import { changeLocationFilter } from "../../redux/filters/slice";
import { useState } from "react";
import { useId } from "react";
import css from "./LocationFilter.module.css";

const LocationFilter = () => {
  const filterInputId = useId();

  const [error, setError] = useState("");

  const validateInput = (value) => {
    const pattern = /^([A-Za-z\s]+,\s[A-Za-z\s]+)?$/;

    if (!pattern.test(value)) {
      setError('Please enter a location in the format: "Ukraine, city name"');
    } else {
      setError("");
    }
  };

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
          onBlur={(e) => validateInput(e.target.value)}
          title='Please enter a location in the format: "Kiev, Ukraine"'
          onChange={(e) => {
            setError(false);
            handleLocationFilterChange(e.target.value);
          }}
        />
        <svg className={css["map-icon"]}>
          <use href="/public/sprite.svg#icon-map"></use>
        </svg>
        {error && <p className={css.error}>{error}</p>}
      </div>
    </div>
  );
};

export default LocationFilter;
