import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectVehicles,
  selectIsLoadingVehicles,
  selectError,
} from "../../redux/vehicles/selectors";
import { fetchVehicles } from "../../redux/vehicles/operations";
import Section from "../../components/common/Section/Section";
import Container from "../../components/common/Container/Container";
import VehiclesList from "../../components/VehiclesList/VehiclesList";
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton";
import Error from "../../components/common/Error/Error";
import Loader from "../../components/common/Loader/Loader";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  const isLoading = useSelector(selectIsLoadingVehicles);
  const error = useSelector(selectError);
  const vehicles = useSelector(selectVehicles);
  const limit = 4;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVehicles({ page: 1, limit, reset: true }));
  }, [dispatch]);

  return (
    <Section>
      <Container>
        {error && <Error />}
        {isLoading && <Loader />}
        <div className={css["page-layout"]}>
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
