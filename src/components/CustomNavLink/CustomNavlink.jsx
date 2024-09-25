import { NavLink } from "react-router-dom";
import { buildLinkClass } from "./buildLinkClass";

const CustomNavLink = ({ children, to }) => {
  return (
    <NavLink to={to} className={buildLinkClass}>
      {children}
    </NavLink>
  );
};

export default CustomNavLink;
