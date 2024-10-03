import { useDispatch, useSelector } from "react-redux";
import { fetchVehicles } from "../redux/vehicles/operations";
import { cleanVehicles } from "../redux/vehicles/slice";
import { selectFilters } from "../redux/filters/selectors";

export const useFetchVehicles = (page, reset = false) => {
  const filters = useSelector(selectFilters);

  const dispatch = useDispatch();

  const fetch = () => {
    return dispatch(
      fetchVehicles({
        page,
        limit: 4,
        filters,
        reset,
      })
    )
      .unwrap()
      .catch(() => {
        dispatch(cleanVehicles());
      });
  };

  return { fetch };
};
