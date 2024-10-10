import { useState, useEffect } from 'react';
import { loadUserData, filterUsersByMonth } from '../utils/utils';

export function useUserData() {
  const [userData, setUserData] = useState(null)
  const [filteredUsers, setFilteredUsers] = useState(null)

  useEffect(() => {
    loadUserData().then(userFileData => {
      setUserData(userFileData)
      const currentDate = new Date()
      const filteredUsers = filterUsersByMonth(userFileData, currentDate.getMonth())
      
      setFilteredUsers(filteredUsers)
    })
  }, [])

  return { userData, filteredUsers, setFilteredUsers }
}