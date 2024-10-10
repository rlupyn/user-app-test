import { filterUsersByMonth, getNormalizedBirthDayString, normalizeData } from './utils'

describe('getNormalizedBirthDayString', () => {
  it('should return string representation of date object', () => {
    const dateObject = new Date('2024 01 13')
    const expectedResult = 'January 13, 2024'

    expect(getNormalizedBirthDayString(dateObject)).toBe(expectedResult)
  })
})

describe('filterUsersByMonth', () => {
  it('should filter users by input birthday month', () => {
    const birthdayMonth = 1 // February by js month format starting from 0 as January
    const users = [
      { firstName: 'name1', lastName: 'lname1', birthdayMonth: 3 },
      { firstName: 'name2', lastName: 'lname2', birthdayMonth: 1 },
      { firstName: 'name3', lastName: 'lname3', birthdayMonth: 0 },
    ]
    const expectedResult = [
      { firstName: 'name2', lastName: 'lname2', birthdayMonth: 1 },
    ]

    expect(filterUsersByMonth(users, birthdayMonth)).toEqual(expectedResult)
  })
})

describe('normalizeData', () => {
  it('should normalize user data from csv file', () => {
    const userDataFromFile = [
      ['name1', 'lname1', 'location1', '04/15/1991'],
      ['name2', 'lname2', 'location2', '01-Jan-1980']
    ]
    const currentDate = new Date()

    const expectedResult = [
      {
        firstName: 'name1',
        lastName: 'lname1',
        location: 'location1',
        birthDay: 'April 15, 1991',
        age: currentDate.getFullYear() - 1991,
        birthdayMonth: 3,
      },
      {
        firstName: 'name2',
        lastName: 'lname2',
        location: 'location2',
        birthDay: 'January 1, 1980',
        age: currentDate.getFullYear() - 1980,
        birthdayMonth: 0,
      }
    ]

    expect(normalizeData(userDataFromFile)).toEqual(expectedResult)
  })
})
