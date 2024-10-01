import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import css from "./GoBackButton.module.css";

const GoBackButton = ({ to }) => {
  return (
    <Link className={css.link} to={to}>
      <IoMdArrowBack className={css.icon} /> Go Back
    </Link>
  );
};

export default GoBackButton;
