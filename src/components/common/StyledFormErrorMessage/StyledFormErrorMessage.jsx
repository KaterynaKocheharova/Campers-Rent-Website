import { ErrorMessage } from "formik";
import css from "./StyledFormErrorMessage.module.css";

const StyledFormErrorMessage = ({ children, ...props }) => {
  return (
    <ErrorMessage className={css.error} {...props} component="div">
      {children}
    </ErrorMessage>
  );
};

export default StyledFormErrorMessage;
