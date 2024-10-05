import { useId } from "react";
import { Field } from "formik";
import StyledErrorMessage from "../StyledErrorMessage/StyledErrorMessage";
import css from "./LocationFilter.module.css";

const LocationFilter = () => {
  const filterInputId = useId();

  return (
    <div className={css["location-group"]}>
      <label className={css.label} htmlFor={filterInputId}>
        Location
      </label>
      <div className={css["input-group"]}>
        <Field
          name="location"
          className={css.input}
          id={filterInputId}
          type="text"
          placeholder="Kyiv, Ukraine"
        />
        <svg className={css["map-icon"]}>
          <use href="/sprite.svg#icon-map"></use>
        </svg>
        <StyledErrorMessage name="location" component="p" />
      </div>
    </div>
  );
};

export default LocationFilter;
