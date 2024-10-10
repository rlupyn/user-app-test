import { useState } from 'react';
import { useUserData } from './hooks/useFileData'
import { filterUsersByMonth } from './utils/utils'
import { Table } from './components/Table';
import { Header } from './components/Header';
import './App.css';

function App() {
  const { userData, filteredUsers, setFilteredUsers } = useUserData()
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())
  
  const applyFilter = () => {
    const usersFilteredByMonth = filterUsersByMonth(userData, selectedMonth)
     setFilteredUsers(usersFilteredByMonth)
  }

  return (
    <div className="App">
      <Header setSelectedMonth={setSelectedMonth} applyFilter={applyFilter}  />
      <Table filteredUsers={filteredUsers} />
    </div>
  );
}

export default App;
