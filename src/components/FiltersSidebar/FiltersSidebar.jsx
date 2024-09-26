import LocationFilter from "../LocationFilter/LocationFilter";
import EquipmentFilter from "../EquipmentFilter/EquipmentFilter";
import VehicleTypeFilter from "../VehicleTypeFilter/VehicleTypeFilter";
import Button from "../common/Button/Button";
import css from "./FiltersSidebar.module.css";

const FiltersSidebar = () => {
  return (
    <section className={css["filters-sidebar"]}>
      <LocationFilter />
      <h2 className={css["filters-title"]}>Filters</h2>
      <EquipmentFilter />
      <VehicleTypeFilter />
      <Button extraClass="search-button">Search</Button>
    </section>
  );
};

export default FiltersSidebar;
