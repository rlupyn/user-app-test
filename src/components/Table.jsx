import { Loader } from './Loader';
import './Table.css'

export function Table({ filteredUsers }) {
  if (!filteredUsers) return <Loader />

  return (
    <div className="TableWrapper">
      <table className="UserTable">
        <thead className="TableHeader">
          <tr>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
            <th scope="col">Location</th>
            <th scope="col">Birthday</th>
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