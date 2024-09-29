import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getVehicleById } from "../non-redux-api/getVehicleById";

  // I created the hook for fethcing vehicle details because it wasn't required by technical task
  // to store it in redux
  // this hook is reused in reviews and features subpages on vehicle detail page

export const useFetchVehicleDetails = () => {
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

  return { vehicleData, error, loading };
};
