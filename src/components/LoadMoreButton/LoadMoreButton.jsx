import { useState } from "react";
import { useFetchVehicles } from "../../hooks/useFetchVehicles";
import Button from "../common/Button/Button";

const LoadMoreButton = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { fetch } = useFetchVehicles(currentPage + 1);

  const handleGalleryScrollDown = () => {
    window.scrollBy({
      top: 500,
      behavior: "smooth",
    });
  };

  const handleLoadMoreClick = () => {
    fetch().then(handleGalleryScrollDown);
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <Button handleClick={handleLoadMoreClick} extraClass="load-more-button">
      Load more
    </Button>
  );
};

export default LoadMoreButton;
