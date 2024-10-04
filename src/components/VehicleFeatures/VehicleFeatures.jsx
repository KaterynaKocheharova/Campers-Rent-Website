import { useEffect, useRef } from "react";
import { useFetchVehicleDetails } from "../../hooks/useFetchVehicleDetails";
import { useGetAvailableCategories } from "../../hooks/useGetAvailableCategories";
import CategoriesList from "../CategoriesList/CategoriesList";
import DetailsTable from "./DetailsTable/DetailsTable";
import H3Title from "../common/H3Title/H3Title";
import { scrollToSubpage } from "../../utils/scrollToSubpage";
import css from "./VehicleFeatures.module.css";

const VehicleFeatures = () => {
  const { vehicleData } = useFetchVehicleDetails();
  const { engine, transmission } = vehicleData || {};
  const componentRef = useRef();

  // useEffect(() => {
  //   if (componentRef.current) {
  //     scrollToSubpage(componentRef.current);
  //   }
  // }, []);

  const availableCategories = useGetAvailableCategories(vehicleData);

  return (
    <div ref={componentRef} className={css["features-container"]}>
      <div className={css["features-content"]}>
        <CategoriesList
          variant="details"
          extraClass="mb100"
          availableCategories={availableCategories}
          engine={engine}
          transmission={transmission}
        />
        <H3Title extraClass="details">Vehicle details</H3Title>
        <DetailsTable vehicleData={vehicleData} />
      </div>
    </div>
  );
};

export default VehicleFeatures;
