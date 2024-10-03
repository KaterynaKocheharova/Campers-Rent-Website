import { useId } from "react";
import { Field, ErrorMessage, useField } from "formik";
import clsx from "clsx";
import css from "./LocationFilter.module.css";

const LocationFilter = () => {
  const filterInputId = useId();
  const [, meta] = useField({
    name: "location",
  });

  return (
    <div className={css["location-group"]}>
      <label className={css.label} htmlFor={filterInputId}>
        Location
      </label>
      <div className={css["input-group"]}>
        <Field
          name="location"
          className={clsx(
            css.input,
            meta.touched && meta.error && css["error-input"]
          )}
          id={filterInputId}
          type="text"
          placeholder="City"
        />
        <svg className={css["map-icon"]}>
          <use href="/sprite.svg#icon-map"></use>
        </svg>
        <ErrorMessage name="location" className={css.error} component="p" />
      </div>
    </div>
  );
};

export default LocationFilter;
