import { useContext } from 'react';
import { ThemeContext } from '../hooks/hooks';
import { ALL_MONTHS, MONTHS_MAPPING } from '../constants'
import './Header.css'
import { getClassNameByTheme } from '../utils/utils';

export function Header({ setSelectedMonth, applyFilter, switchTheme }) {
  const theme = useContext(ThemeContext)
  const currentDate = new Date()

  const onSelect = (event) => {
    const selectedValue = event.target.value
    setSelectedMonth(selectedValue)
  }

  const headerClassName = getClassNameByTheme('Header', theme)
  const buttonClassName = getClassNameByTheme('HeaderButton', theme)
  const optionsClassName = getClassNameByTheme('FilterOptions', theme)

  return (
    <div className={headerClassName}>
      <span>Employee Information</span>
      <div className="FilterControl">
        <button className={buttonClassName} onClick={switchTheme}>Theme</button>
        <button className={buttonClassName} onClick={applyFilter}>Apply filter</button>
        <select
          name="sort-options"
          className={optionsClassName}
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