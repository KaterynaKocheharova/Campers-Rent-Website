import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectVehicles,
  selectCurrentPage,
} from "../../redux/vehicles/selectors";
import { fetchVehicles } from "../../redux/vehicles/operations";
import Section from "../../components/common/Section/Section";
import Container from "../../components/common/Container/Container";
import FiltersSidebar from "../../components/FiltersSidebar/FiltersSidebar";
import VehiclesList from "../../components/VehiclesList/VehiclesList";
import css from "./CatalogPage.module.css";
import { changeCurrentPage } from "../../redux/vehicles/slice";

const CatalogPage = () => {
  const vehicles = useSelector(selectVehicles);
  const currentPage = useSelector(selectCurrentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVehicles({ page: 1, limit: 4 }));
  }, [dispatch]);

  const handleLoadMoreClick = () => {
    dispatch(changeCurrentPage(currentPage + 1));
    dispatch(fetchVehicles({ page: currentPage + 1, limit: 4 }));
  };

  return (
    <Section>
      <Container>
        <div className={css["catalog-layout"]}>
          <FiltersSidebar />
          <div className={css.catalog}>
            <VehiclesList vehicles={vehicles} />
            <button onClick={handleLoadMoreClick}>Load More</button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CatalogPage;
