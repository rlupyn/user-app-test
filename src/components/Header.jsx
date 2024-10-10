import { ALL_MONTHS, MONTHS_MAPPING } from '../utils/utils'
import './Header.css'

export function Header({ setSelectedMonth, applyFilter }) {
  const currentDate = new Date()

  const onSelect = (event) => {
    const selectedValue = event.target.value
    setSelectedMonth(selectedValue)
  }

  return (
    <div className="Header">
      <span>Employee Information</span>
      <div className="FilterControl">
        <button className="FilterButton" onClick={applyFilter}>Apply filter</button>
        <select
          name="sort-options"
          className="FilterOptions"
          defaultValue={currentDate.getMonth()}
          onChange={onSelect}
        >
          <option value={ALL_MONTHS}>All</option>
          {Object.entries(MONTHS_MAPPING).map(([key, value]) => (
            <option key={value} value={key}>{value}</option>
          ))}
        </select>
      </div>
    </div>
  )
}