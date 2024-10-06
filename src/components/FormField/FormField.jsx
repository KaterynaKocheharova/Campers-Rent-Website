import { useField, Field } from "formik";
import StyledErrorMessage from "../StyledErrorMessage/StyledErrorMessage";
import clsx from "clsx";
import css from "./FormField.module.css";

const FormField = ({ extraClass, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={css["relative"]}>
      <Field
        className={clsx(css.input, {
          [css["error-input"]]: meta.touched && meta.error,
          [css[extraClass]]: extraClass,
        })}
        name={props.name}
        placeholder={props.placeholder}
        {...field}
        {...props}
      />
      <StyledErrorMessage name={props.name} component="div" />
    </div>
  );
};

export default FormField;
