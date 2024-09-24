import { NavLink } from "react-router-dom";

const CustomNavLink = ({ children, to }) => {
  return <NavLink to={to}>{children}</NavLink>;
};

export default CustomNavLink;
