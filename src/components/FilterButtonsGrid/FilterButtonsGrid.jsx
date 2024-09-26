import css from "./FilterButtonsGrid.module.css";

const FilterButtonsGrid = ({children}) => {
  return (
    <ul className={css.grid}>
      {children}
    </ul>
  )
}

export default FilterButtonsGrid
