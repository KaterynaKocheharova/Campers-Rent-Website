import { useSelector } from "react-redux";
import { selectError } from "../../../redux/vehicles/selectors";
import css from "./Error.module.css";

const Error = () => {
  const error = useSelector(selectError);

  if (error === "Items matching your filter not found") {
    return <p className={css.error}>{error}</p>;
  } else {
    return (
      <p className={css.error}>
        Oops. Something went wrong. Check out internet connection or try again
        later
      </p>
    );
  }
};

export default Error;
