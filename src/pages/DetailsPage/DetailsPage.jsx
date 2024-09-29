import { useMemo } from "react";
import { useFetchVehicleDetails } from "../../hooks/useFetchVehicleDetails";
import { Outlet } from "react-router-dom";
import Section from "../../components/common/Section/Section";
import Container from "../../components/common/Container/Container";
import Error from "../../components/common/Error/Error";
import Loader from "../../components/common/Loader/Loader";
import VehicleCardHead from "../../components/VehicleCardHead/VehicleCardHead";
import VehicleImageGrid from "../../components/VehicleImageGrid/VehicleImageGrid";
import Text from "../../components/common/Text/Text";
import VehicleDetailsTabs from "../../components/VehicleDetailsTabs/VehicleDetailsTabs";
import BookingForm from "../../components/BookingForm/BookingForm";
import css from "./DetailsPage.module.css";

const DetailsPage = () => {
  const { vehicleData, error, loading } = useFetchVehicleDetails();

  const {
    name,
    price,
    rating,
    location,
    description,
    gallery = [],
    reviews,
  } = vehicleData || {};

  const images = useMemo(() => {
    return gallery.map((galleryItem) => galleryItem.original);
  }, [gallery]);

  return (
    <Section>
      <Container>
        <div className={css.top}>
          {name && rating && location && price && reviews && (
            <VehicleCardHead
              headData={{ name, rating, location, price, reviews }}
              variant="details"

            />
          )}
          {vehicleData && <VehicleImageGrid images={images} />}

          <Text variant="light">{description}</Text>
        </div>

        {error && <Error />}
        {loading && <Loader />}
        <VehicleDetailsTabs />
        <div className={css.bottom}>
          <Outlet />
          <BookingForm />
        </div>
      </Container>
    </Section>
  );
};

export default DetailsPage;
