import Section from "../../components/common/Section/Section";
import Container from "../../components/common/Container/Container";
import LocationFilter from "../../components/LocationFilter/LocationFilter";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <Section>
      <Container>
        <div className={css["catalog-layout"]}>
          <div className={css["filters-sidebar"]}>
            <LocationFilter />
          </div>
          <div className={css["catalog"]}>Catalog</div>
        </div>
      </Container>
    </Section>
  );
};

export default CatalogPage;

// do markup
// redux
// finish markup
