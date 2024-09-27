import { useParams } from "react-router-dom";
import { getVehicleById } from "../../non-redux-api/getVehicleById";
import Section from "../../components/common/Section/Section";
import Container from "../../components/common/Container/Container";
import Error from "../../components/common/Error/Error";
import Loader from "../../components/common/Loader/Loader";
import VehicleCardHead from "../../components/VehicleCardHead/VehicleCardHead";
import { useState, useEffect } from "react";

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
    gallery,
    reviews,
  } = vehicleData || {};

  return (
    <Section>
      <Container>
        {vehicleData && (
          <VehicleCardHead
            headData={{ name, rating, location, price, reviews }}
            variant="details"
            isUnderlined
          />
        )}
        {error && <Error />}
        {loading && <Loader />}
      </Container>
    </Section>
  );
};

export default DetailsPage;
