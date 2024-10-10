import Papa from 'papaparse'

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

export const ALL_MONTHS = 'all' 

export const MONTHS_MAPPING = {
  '0': 'January',
  '1': 'February',
  '2': 'March',
  '3': 'April',
  '4': 'May',
  '5': 'Jun',
  '6': 'July',
  '7': 'August',
  '8': 'September',
  '9': 'October',
  '10': 'November',
  '11': 'December',
}

