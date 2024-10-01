import { useSelector, useDispatch } from "react-redux";
import { selectCurrentPage } from "../../redux/vehicles/selectors";
import { changeCurrentPage } from "../../redux/vehicles/slice";
import { useFetchVehicles } from "../../hooks/useFetchVehicles";
import Button from "../common/Button/Button";

const LoadMoreButton = () => {
  const currentPage = useSelector(selectCurrentPage);
  const { fetch } = useFetchVehicles(currentPage + 1);

  const dispatch = useDispatch();

  const handleGalleryScrollDown = () => {
    window.scrollBy({
      top: 500,
      behavior: "smooth",
    });
  };

  const handleLoadMoreClick = () => {
    dispatch(changeCurrentPage(currentPage + 1));
    fetch().then(handleGalleryScrollDown);
  };

  return (
    <Button handleClick={handleLoadMoreClick} extraClass="load-more-button">
      Load more
    </Button>
  );
};

export default LoadMoreButton;
