import clsx from "clsx";
import css from "./VehicleDetail.module.css";

const VehicleDetail = ({ detail: { property, value } }) => {
  return (
    <li className={css.flex}>
      <p className={css.text}>{property}</p>
      <p className={(clsx(css.text), property === "Form" && css.capitalize)}>
        {value}
      </p>
    </li>
  );
};

export default VehicleDetail;
