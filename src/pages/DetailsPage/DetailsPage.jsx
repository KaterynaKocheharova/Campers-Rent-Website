import { useMemo, useRef } from "react";
import { useFetchVehicleDetails } from "../../hooks/useFetchVehicleDetails";
import { Outlet, useLocation } from "react-router-dom";
import Section from "../../components/common/Section/Section";
import Container from "../../components/common/Container/Container";
import Error from "../../components/common/Error/Error";
import Loader from "../../components/common/Loader/Loader";
import VehicleCardHead from "../../components/VehicleCardHead/VehicleCardHead";
import VehicleImageGrid from "../../components/VehicleImageGrid/VehicleImageGrid";
import Text from "../../components/common/Text/Text";
import VehicleDetailsTabs from "../../components/VehicleDetailsTabs/VehicleDetailsTabs";
import BookingForm from "../../components/BookingForm/BookingForm";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import css from "./DetailsPage.module.css";

const DetailsPage = () => {
  const { vehicleData, error, loading } = useFetchVehicleDetails();
  const currentLocation = useLocation();
  const backLinkHref = useRef(currentLocation.state ?? "/catalog");

  const {
    name,
    price,
    rating,
    location: vehicleLocation,
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
          <div className={css["top-flex"]}>
            {name && rating && vehicleLocation && price && reviews && (
              <VehicleCardHead
                headData={{
                  name,
                  rating,
                  location: vehicleLocation,
                  price,
                  reviews,
                }}
                variant="details"
              />
            )}
            <GoBackButton to={backLinkHref.current} />
          </div>

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
