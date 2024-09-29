import LocationFilter from "../LocationFilter/LocationFilter";
import EquipmentFilter from "../EquipmentFilter/EquipmentFilter";
import VehicleTypeFilter from "../VehicleTypeFilter/VehicleTypeFilter";
import SearchByFilterButton from "../SearchByFilterButton/SearchByFilterButton";

import css from "./FiltersSidebar.module.css";

const FiltersSidebar = () => {
  return (
    <section className={css["filters-sidebar"]}>
      <LocationFilter />
      <h2 className={css["filters-title"]}>Filters</h2>
      <EquipmentFilter />
      <VehicleTypeFilter />
      <SearchByFilterButton />
    </section>
  );
};

export default FiltersSidebar;
