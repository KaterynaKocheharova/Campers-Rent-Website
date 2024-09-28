import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getVehicleById } from "../non-redux-api/getVehicleById";

export const useFetchVehicleDeatils = () => {
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

