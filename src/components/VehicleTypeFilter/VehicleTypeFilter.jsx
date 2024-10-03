import FilterButtonsGrid from "../FilterButtonsGrid/FilterButtonsGrid";
import FilterVehicleTypeRadio from "../FilterVehicleTypeRadio/FilterVehicleTypeRadio";
import FilterTitle from "../FilterTitle/FilterTitle";

const vehicleTypeFilters = [
  {
    name: "panelTruck",
    normalizedName: "van",
    icon: "icon-3grid",
  },
  {
    name: "fullyIntegrated",
    icon: "icon-4grid",
    normalizedName: "Fully Integrated",
  },
  {
    name: "alcove",
    icon: "icon-9grid",
    normalizedName: "Alcove",
  },
];

const VehicleTypeFilter = () => {
  return (
    <>
      <FilterTitle>Vehicle type</FilterTitle>
      <FilterButtonsGrid name="vehicleType">
        {vehicleTypeFilters.map((equipmentFilter, index) => (
          <FilterVehicleTypeRadio key={index} filterData={equipmentFilter} />
        ))}
      </FilterButtonsGrid>
    </>
  );
};

export default VehicleTypeFilter;
