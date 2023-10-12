import React from "react"
import UserForm from "./components/users/userForm.component"
import CompanyForm from "./components/companies/companyForm.component"
import SuccessPage from "./components/success-page.component"
import ErrorPage from "./components/error-page.component"
import CompanyList from "./components/companies/companyList.component"
import Company from "./components/companies/company.component"

import companyData from "../data/companies.json"
import userData from "../data/users.json"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

const App = () => {
  const companies = companyData
  const users = userData

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          exact
          element={<CompanyList companies={companies} users={users} />}
        />

        <Route
          path='/companies/:companyId'
          element={<Company users={users} />}
        />

        <Route path='/companies/add-user/:companyId' element={<UserForm />} />

        <Route path='/companies/add-company' element={<CompanyForm />} />
        <Route path='/error-page' element={<ErrorPage />} />
        <Route path='/success-page' element={<SuccessPage />} />
      </Routes>
    </Router>
  )
}

export default App
