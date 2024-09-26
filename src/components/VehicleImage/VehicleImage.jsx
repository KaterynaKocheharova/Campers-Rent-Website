import css from "./VehicleImage.module.css";

const VehicleImage = ({ url }) => {
  return (
    <div className={css["image-container"]}>
      <img src={url} alt="vehicle image" />
    </div>
  );
};

export default VehicleImage;
