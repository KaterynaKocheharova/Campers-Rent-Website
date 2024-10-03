import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { selectFilters } from "../../redux/filters/selectors";
import { selectTotalItems } from "../../redux/vehicles/selectors";
import { useFetchVehicles } from "../../hooks/useFetchVehicles";
import { handleGalleryScrollDown } from "../../utils/handleGalleryScrolldown";
import Button from "../common/Button/Button";

const LoadMoreButton = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const filters = useSelector(selectFilters);
  const totalItems = useSelector(selectTotalItems);
  const limit = 4;
  const totalPages = useMemo(
    () => Math.ceil(totalItems / limit),
    [totalItems, limit]
  );

  const { fetch } = useFetchVehicles(currentPage + 1);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const handleLoadMoreClick = () => {
    fetch().then(handleGalleryScrollDown);
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <>
      {currentPage < totalPages && (
        <Button handleClick={handleLoadMoreClick} extraClass="load-more-button">
          Load more
        </Button>
      )}
    </>
  );
};

export default LoadMoreButton;

