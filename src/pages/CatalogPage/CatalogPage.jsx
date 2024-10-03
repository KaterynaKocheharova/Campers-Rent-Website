import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectVehicles,
  selectCurrentPage,
  selectTotalItems,
  selectIsLoadingVehicles,
  selectError,
} from "../../redux/vehicles/selectors";
import { changeCurrentPage } from "../../redux/vehicles/slice";
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
  const totalItems = useSelector(selectTotalItems);
  const currentPage = useSelector(selectCurrentPage);
  const limit = 4;

  const dispatch = useDispatch();

  const totalPages = useMemo(
    () => Math.ceil(totalItems / limit),
    [totalItems, limit]
  );

  useEffect(() => {
    dispatch(changeCurrentPage(1));
    dispatch(fetchVehicles({ page: 1, limit }));
  }, [dispatch]);

  return (
    <Section>
      <Container>
        {error && <Error />}
        {isLoading && <Loader />}
        <div className={css["page-layout"]}>
          <div className={css.catalog}>
            <VehiclesList vehicles={vehicles} />
            {vehicles.length > 0 && currentPage < totalPages && (
              <LoadMoreButton />
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CatalogPage;
