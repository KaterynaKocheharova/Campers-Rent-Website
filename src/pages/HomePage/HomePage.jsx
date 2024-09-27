import Container from "../../components/common/Container/Container";
import Button from "../../components/common/Button/Button";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <section className={css["hero-section"]}>
      <Container>
        <h1 className={css["hero-title"]}>Campers of your dreams</h1>
        <p className={css["hero-text"]}>
          You can find everything you want in our catalog
        </p>
        <Button extraClass="hero-link">View Now</Button>
      </Container>
    </section>
  );
};

export default HomePage;
