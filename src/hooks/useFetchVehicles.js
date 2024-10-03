import { useDispatch, useSelector } from "react-redux";
import { fetchVehicles } from "../redux/vehicles/operations";
import { cleanVehicles } from "../redux/vehicles/slice";
import { selectFilters } from "../redux/filters/selectors";
import { selectCurrentPage } from "../redux/vehicles/selectors";

export const useFetchVehicles = (page) => {
  const currentPage = useSelector(selectCurrentPage);
  const filters = useSelector(selectFilters);
  console.log(filters);

  const dispatch = useDispatch();

  const fetch = () => {
    return dispatch(
      fetchVehicles({
        page: page ? page : currentPage,
        limit: 4,
        filters,
      })
    )
      .unwrap()
      .catch(() => {
        dispatch(cleanVehicles());
      });
  };

  return { fetch };
};
