import css from "./VehicleImage.module.css";

const VehicleImage = ({ url }) => {
  return (
    <li className={css["image-container"]}>
      <img src={url} alt="vehicle image" />
    </li>
  );
};

export default VehicleImage;
