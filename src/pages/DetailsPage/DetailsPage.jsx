import { useMemo } from "react";
import { useParams, Outlet } from "react-router-dom";
import { getVehicleById } from "../../non-redux-api/getVehicleById";
import Section from "../../components/common/Section/Section";
import Container from "../../components/common/Container/Container";
import Error from "../../components/common/Error/Error";
import Loader from "../../components/common/Loader/Loader";
import VehicleCardHead from "../../components/VehicleCardHead/VehicleCardHead";
import VehicleImageGrid from "../../components/VehicleImageGrid/VehicleImageGrid";
import Text from "../../components/common/Text/Text";
import VehicleDetailsTabs from "../../components/VehicleDetailsTabs/VehicleDetailsTabs";
import { useState, useEffect } from "react";
import css from "./DetailsPage.module.css";

const DetailsPage = () => {
  const { id } = useParams();
  const [vehicleData, setVehicleData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getVehicle = async () => {
      try {
        setLoading(true);
        setError(false);
        const { data } = await getVehicleById(id);
        setVehicleData(data);
      } catch (error) {
        setError(true);
      }

      setLoading(false);
    };

    getVehicle();
  }, [id]);

  const {
    name,
    price,
    rating,
    location,
    description,
    form,
    length,
    width,
    height,
    tank,
    consumption,
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
    gallery = [],
    reviews,
  } = vehicleData || {};

  const images = useMemo(() => {
    return gallery.map((galleryItem) => galleryItem.original);
  }, [gallery]);

  console.log(images);

  return (
    <Section>
      <Container>
        <div className={css.top}>
          {vehicleData && (
            <VehicleCardHead
              headData={{ name, rating, location, price, reviews }}
              variant="details"
              isUnderlined
            />
          )}
          <VehicleImageGrid images={images} />
          <Text variant="light">{description}</Text>
        </div>

        {error && <Error />}
        {loading && <Loader />}
        <VehicleDetailsTabs />
        <Outlet />
      </Container>
    </Section>
  );
};

export default DetailsPage;
