import css from "./NavLink.module.css";
import clsx from "clsx";

export const buildLinkClass = ({ isActive }) => {
    return clsx(css["navlink"], isActive && css["active-navlink"]);
  };