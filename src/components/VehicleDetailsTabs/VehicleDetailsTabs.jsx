import { NavLink } from "react-router-dom";
import css from "./VehicleDetailsTabs.module.css";
import { buildLinkClass } from "./buildLinkClass";

const VehicleDetailsTabs = () => {
  return (
    <div className={css["link-container"]}>
      <NavLink className={buildLinkClass} to="features">
        Features
      </NavLink>
      <NavLink className={buildLinkClass} to="reviews">
        Reviews
      </NavLink>
    </div>
  );
};

export default VehicleDetailsTabs;
