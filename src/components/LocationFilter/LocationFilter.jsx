import { useId } from "react";
import FormField from "../FormField/FormField";
import css from "./LocationFilter.module.css";

const LocationFilter = () => {
  const filterInputId = useId();

  const icon = (
    <svg className={css["map-icon"]}>
      <use href="/sprite.svg#icon-map"></use>
    </svg>
  );

  return (
    <div className={css["location-group"]}>
      <label className={css.label} htmlFor={filterInputId}>
        Location
      </label>
      <FormField
        extraClass="location-input"
        name="location"
        id={filterInputId}
        type="text"
        placeholder="Kyiv, Ukraine"
        icon={icon}
      />
    </div>
  );
};

export default LocationFilter;
