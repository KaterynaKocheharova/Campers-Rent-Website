import ThickText from "../../../common/ThickText/ThickText";
import css from "./VehicleDetail.module.css";

const VehicleDetail = ({ detail: { property, value } }) => {
  return (
    <li className={css.flex}>
      <ThickText>{property}</ThickText>
      <ThickText extraClass={property === "Form" ? "capitalized" : ""}>
        {value}
      </ThickText>
    </li>
  );
};

export default VehicleDetail;
