import { ErrorMessage } from "formik";
import css from "./StyledErrorMessage.module.css";

const StyledErrorMessage = ({ children, name, ...props }) => {
  return (
    <ErrorMessage className={css.error} name={name} {...props}>
      {children}
    </ErrorMessage>
  );
};

export default StyledErrorMessage;
