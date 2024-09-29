import { Field } from "formik";
import css from "./Input.module.css";

const Input = ({ name, type, id }) => {
  return <Field name={name} type={type} id={id} className={css.input} />;
};

export default Input;
