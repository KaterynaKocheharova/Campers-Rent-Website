import LocationFilter from "../LocationFilter/LocationFilter";
import EquipmentFilter from "../EquipmentFilter/EquipmentFilter";
import VehicleTypeFilter from "../VehicleTypeFilter/VehicleTypeFilter";
import FilterSearchButton from "../FilterSearchButton/FilterSearchButton";

import css from "./FiltersSidebar.module.css";

const FiltersSidebar = () => {
  return (
    <section className={css["filters-sidebar"]}>
      <LocationFilter />
      <h2 className={css["filters-title"]}>Filters</h2>
      <EquipmentFilter />
      <VehicleTypeFilter />
      <FilterSearchButton />
    </section>
  );
};

export default FiltersSidebar;
