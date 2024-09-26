import { Field } from "formik";
import clsx from "clsx";
import css from "./Input.module.css";

const Input = ({ name, type, id, variant }) => {
  return (
    <Field
      name={name}
      type={type}
      id={id}
      className={clsx(
        css.input,
        variant === "location-filter" && css["location-filter-input"]
      )}
    />
  );
};

export default Input;
