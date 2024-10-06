import { useField, Field } from "formik";
import StyledFormErrorMessage from "../common/StyledFormErrorMessage/StyledFormErrorMessage";
import RelativeContainer from "../common/RelativeContainer/RelativeContainer";
import clsx from "clsx";
import css from "./FormField.module.css";

const FormField = ({ extraClass, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <RelativeContainer>
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
      <StyledFormErrorMessage name={props.name} component="div" />
    </RelativeContainer>
  );
};

export default FormField;
