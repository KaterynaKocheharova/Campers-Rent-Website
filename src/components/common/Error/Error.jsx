import { useSelector } from "react-redux";
import { selectError } from "../../../redux/vehicles/selectors";
import { IoSadOutline } from "react-icons/io5";
import css from "./Error.module.css";

const Error = () => {
  const error = useSelector(selectError);

  if (error === "Items matching your filter not found") {
    return (
      <p className={css.error}>
        {error} <IoSadOutline className={css.icon} />
      </p>
    );
  } else {
    return (
      <p className={css.error}>
        Oops. Something went wrong. Check out internet connection or try again
        later. <IoSadOutline className={css.icon} />
      </p>
    );
  }
};

export default Error;
