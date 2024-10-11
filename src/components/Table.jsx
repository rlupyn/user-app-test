import { useContext } from 'react';
import { ThemeContext } from '../hooks/hooks';
import { getClassNameByTheme } from '../utils/utils';
import { Loader } from './Loader';
import './Table.css'

export function Table({ filteredUsers }) {
  const theme = useContext(ThemeContext)

  if (!filteredUsers) return <Loader />

  const tableWrapperClassName = getClassNameByTheme('TableWrapper', theme)
  return (
    <div className={tableWrapperClassName}>
      <table className="UserTable">
        <thead className="TableHeader">
          <tr>
            <th scope="col">
              <div>
                <span>First name</span>
                <div className="Divider" />
              </div>
            </th>
            <th scope="col">
              <div>
                <span>Last name</span>
                <div className="Divider" />
              </div>
            </th>
            <th scope="col">
              <div>
                <span>Location</span>
                <div className="Divider" />
              </div>
            </th>
            <th scope="col">
              <div>
                <span>Birthday</span>
                <div className="Divider" />
              </div>
            </th>
            <th scope="col">Age(years)</th>
          </tr>
        </thead>
        <tbody className="TableBody">
          {filteredUsers.map(({ firstName, lastName, location, birthDay, age }) => (
            <tr key={`${firstName}-${birthDay}`} className="TableRow">
              <td>
                {firstName}
              </td>
              <td>
                {lastName}
              </td>
              <td>{location}
              </td>
              <td>
                {birthDay}
              </td>
              <td>
                {age}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}