import { useState } from "react";
import { useId } from "react";
import css from "./LocationFilter.module.css";

const LocationFilter = () => {
  const [error, setError] = useState("");
  const filterInputId = useId();

  const validateInput = (e) => {
    const value = e.target.value;
    const pattern = /^[A-Za-z\s]+,\s[A-Za-z\s]+$/;

    if (!pattern.test(value)) {
      setError('Please enter a location in the format: "Kiev, Ukraine"');
    } else {
      setError("");
    }
  };

  return (
    <div>
      <label className={css.label} htmlFor={filterInputId}>
        Location
      </label>
      <div className={css["input-group"]}>
        <input
          className={css.input}
          id={filterInputId}
          type="text"
          placeholder="City"
          onBlur={validateInput}
          title='Please enter a location in the format: "Kiev, Ukraine"'
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
