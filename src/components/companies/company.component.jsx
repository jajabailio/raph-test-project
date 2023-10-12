import React from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import "./company.styles.css"

const Company = ({ users }) => {
  const { companyId, address, ownedBy } = useParams()

  const filteredUsers = users.filter((user) => user.companyId == companyId)

  return (
    <div className='company-list'>
      <h2>Company Details</h2>
      <h3>Address</h3>
      {address}
      <h3>Owned by:</h3>
      {ownedBy}
      <ul>
        {filteredUsers.map((filteredUser) => (
          <li key={filteredUser.id}>
            {filteredUser.firstName} - {filteredUser.email} -{" "}
            {filteredUser.role}
          </li>
        ))}
      </ul>
      <Link to={`/companies/add-user/${companyId}`}>Add User</Link>
    </div>
  )
}

export default Company
