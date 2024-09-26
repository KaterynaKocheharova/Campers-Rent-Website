import { useSelector, useDispatch } from "react-redux";
import { selectCurrentPage } from "../../redux/vehicles/selectors";
import { fetchVehicles } from "../../redux/vehicles/operations";
import { changeCurrentPage } from "../../redux/vehicles/slice";
import Button from "../common/Button/Button";

const LoadMoreButton = () => {
  const currentPage = useSelector(selectCurrentPage);

  const dispatch = useDispatch();

  const handleLoadMoreClick = () => {
    dispatch(changeCurrentPage(currentPage + 1));
    dispatch(fetchVehicles({ page: currentPage + 1, limit: 4 }))
      .unwrap()
      .then(() => {
        window.scrollBy({
          top: 500,
          behavior: "smooth",
        });
      });
  };

  return (
    <Button handleClick={handleLoadMoreClick} extraClass="load-more-button">
      Load more
    </Button>
  );
};

export default LoadMoreButton;
