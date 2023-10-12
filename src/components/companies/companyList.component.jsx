import React from "react"
import { Link } from "react-router-dom"
import "./companyList.styles.css"

const CompanyList = ({ companies, users }) => {
  const totalCompanies = companies.length
  const activeCompanies = companies.filter((company) => company.active === true)
  const activeCompanyCount = activeCompanies.length
  const inActiveCompanies = companies.filter(
    (company) => company.active === true
  )
  const inActiveCompaniesCount = inActiveCompanies.length

  return (
    <div className='company-list'>
      <ul className='company-headers'>
        <li>Total Companies {totalCompanies}</li>
        <li>Active Companies {activeCompanyCount}</li>
        <li>InActive Companies {inActiveCompaniesCount}</li>
      </ul>
      <table className='table-company-list'>
        {companies.map((company) => (
          <tbody key={company.id}>
            <tr className='tr-company-list'>
              <td className='td-company-list'>
                {company.companyName}
                <br />
                <Link to={`/companies/${company.id}`}> View Details</Link>
              </td>

              <td className='td-company-list'>
                {company.active ? "(Active)" : "(Inactive)"}
              </td>
              <td className='td-company-list'>
                {users.filter((user) => user.companyId === company.id).length}
                <br />
                Users
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <Link to={`/companies/add-company`}>
        <button className='button-send'>Add Company</button>
      </Link>
    </div>
  )
}

export default CompanyList
