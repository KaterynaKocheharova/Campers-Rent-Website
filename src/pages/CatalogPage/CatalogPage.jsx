import Section from "../../components/common/Section/Section";
import Container from "../../components/common/Container/Container";
import FiltersSidebar from "../../components/FiltersSidebar/FiltersSidebar";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <Section>
      <Container>
        <div className={css["catalog-layout"]}>
          <FiltersSidebar />
          <div className={css.catalog}>Catalog</div>
        </div>
      </Container>
    </Section>
  );
};

export default CatalogPage;
