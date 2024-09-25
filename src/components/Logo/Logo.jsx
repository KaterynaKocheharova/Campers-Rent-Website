import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink to="/">
      <svg width="136" height="16">
        <use href="/sprite.svg#icon-logoTravelTrucks"></use>
      </svg>
    </NavLink>
  );
};

export default Logo;
