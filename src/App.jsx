import { useState } from 'react';
import { DARK_THEME, LIGHT_THEME } from './constants';
import { useUserData, ThemeContext } from './hooks/hooks'
import { filterUsersByMonth, getClassNameByTheme } from './utils/utils'
import { Table } from './components/Table';
import { Header } from './components/Header';
import './App.css';

function App() {
  const { userData, filteredUsers, setFilteredUsers } = useUserData()
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())
  const [theme, setTheme] = useState(LIGHT_THEME)

  const applyFilter = () => {
    const usersFilteredByMonth = filterUsersByMonth(userData, selectedMonth)
    setFilteredUsers(usersFilteredByMonth)
  }

  const switchTheme = () => {
    const newValue = (theme === LIGHT_THEME) ? DARK_THEME : LIGHT_THEME
    setTheme(newValue)
  }

  const appClassName = getClassNameByTheme('App', theme)

  return (
    <ThemeContext.Provider value={theme}>
      <div className={appClassName}>
        <Header
          setSelectedMonth={setSelectedMonth}
          applyFilter={applyFilter}
          switchTheme={switchTheme}
        />
        <Table filteredUsers={filteredUsers} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
