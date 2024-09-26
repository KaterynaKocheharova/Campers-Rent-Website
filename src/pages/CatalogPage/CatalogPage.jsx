import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectVehicles } from "../../redux/vehicles/selectors";
import { fetchVehicles } from "../../redux/vehicles/operations";
import Section from "../../components/common/Section/Section";
import Container from "../../components/common/Container/Container";
import FiltersSidebar from "../../components/FiltersSidebar/FiltersSidebar";
import VehiclesList from "../../components/VehiclesList/VehiclesList";
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  const vehicles = useSelector(selectVehicles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVehicles({ page: 1, limit: 4 }));
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <div className={css["page-layout"]}>
          <FiltersSidebar />
          <div className={css.catalog}>
            <VehiclesList vehicles={vehicles} />
            <LoadMoreButton />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CatalogPage;
