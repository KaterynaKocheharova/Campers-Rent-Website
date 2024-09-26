import LocationFilter from "../LocationFilter/LocationFilter";
import H3Title from "../common/H3Title/H3Title";
import EquipmentFilter from "../EquipmentFilter/EquipmentFilter";
import css from "./FiltersSidebar.module.css";

const FiltersSidebar = () => {
  return (
    <div className={css["filters-sidebar"]}>
      <LocationFilter />
      <h2 className={css["filters-title"]}>Filters</h2>
      <div className={css["title-container"]}>
        <H3Title>Vehicle equipment</H3Title>
        <EquipmentFilter />
      </div>
    </div>
  );
};

export default FiltersSidebar;
