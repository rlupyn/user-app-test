import Papa from 'papaparse'
import { MONTHS_MAPPING, ALL_MONTHS, LIGHT_THEME, DARK_THEME_CLASS_SUFFIX } from '../constants'

export function getNormalizedBirthDayString(dateObj) {
  return `${MONTHS_MAPPING[dateObj.getMonth()]} ${dateObj.getDate()}, ${dateObj.getFullYear()}`
}

export function normalizeData(parsedUserData) {
  return parsedUserData.map(userData => {
    const [firstName, lastName, location, birthDay] = userData
    const dateObj = new Date(birthDay)
    const currentDate = new Date()
    const age = (currentDate.getFullYear() - dateObj.getFullYear())
    const normalizedBirthDay = getNormalizedBirthDayString(dateObj)

    return {
      firstName,
      lastName,
      location,
      birthDay: normalizedBirthDay,
      age,
      birthdayMonth: dateObj.getMonth(),
    }
  })
}

export async function loadUserData() {
  const userData = await fetch('./users.csv')
    .then(response => response.text())
    .then(responseText => {
      const parsedData = Papa.parse(responseText)
      parsedData.data.shift() // removes columns titles from parsed csv file

      return normalizeData(parsedData.data)
    })
  
  return userData
}

export function filterUsersByMonth(users, monthValue) {
  if (!users) return []
  
  if (monthValue === ALL_MONTHS) return users
  
  return users.filter(({ birthdayMonth }) => {
    return birthdayMonth === parseInt(monthValue)
  })
}

export function getClassNameByTheme(originalClassName, theme = LIGHT_THEME) {
  if (theme === LIGHT_THEME) return originalClassName
  
  return `${originalClassName} ${DARK_THEME_CLASS_SUFFIX}`
}

