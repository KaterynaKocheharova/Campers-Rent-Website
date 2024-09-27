import css from "./VehicleDetailsTabs.module.css";
import clsx from "clsx";

export const buildLinkClass = ({ isActive }) => {
    return clsx(css["link"], isActive && css["active-link"]);
  };