import Container from "../common/Container/Container";
import Logo from "../Logo/Logo";
import CustomNavLink from "../CustomNavLink/CustomNavlink";
import css from "./AppBar.module.css";

const AppBar = () => {
  return (
    <header className={css.header}>
      <Container>
        <nav className={css["appbar-flex"]}>
          <Logo />
          <div className={css["navlinks-flex"]}>
            <CustomNavLink to="/">Home</CustomNavLink>
            <CustomNavLink to="/catalog">Catalog</CustomNavLink>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default AppBar;
