import { useField, Field } from "formik";
import StyledFormErrorMessage from "../common/StyledFormErrorMessage/StyledFormErrorMessage";
import RelativeContainer from "../common/RelativeContainer/RelativeContainer";
import clsx from "clsx";
import css from "./FormField.module.css";

const FormField = ({ extraClass, icon, ...props }) => {
  const [field, meta, helpers] = useField(props);

  const saveToLocalStorage = (name, value) => {
    localStorage.setItem(name, value);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    saveToLocalStorage(props.name, value);
    helpers.setValue(value);
  };

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
        onChange={handleChange}
      />
      {icon && icon}
      <StyledFormErrorMessage name={props.name} />
    </RelativeContainer>
  );
};

export default FormField;
