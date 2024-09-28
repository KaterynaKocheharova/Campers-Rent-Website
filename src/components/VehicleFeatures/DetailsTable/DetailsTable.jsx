import VehicleDetail from "./VehicleDetail/VehicleDetail";
import { formatDetail } from "../../../utils/formatDetail";
import css from "./DetailsTable.module.css";

const DetailsTable = ({ vehicleData }) => {
  const { form, length, width, height, tank, consumption } = vehicleData || {};

  const vehicleDetails = [
    { property: "Form", value: form },
    { property: "Length", value: formatDetail(length) },
    { property: "Width", value: formatDetail(width) },
    { property: "Height", value: formatDetail(height) },
    { property: "Tank", value: formatDetail(tank) },
    { property: "Consumption", value: consumption },
  ];

  return (
    <ul className={css.table}>
      {vehicleDetails.map((detail, index) => (
        <VehicleDetail key={index} detail={detail} />
      ))}
    </ul>
  );
};

export default DetailsTable;
