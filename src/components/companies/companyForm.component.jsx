import React, { useState } from "react"
import "./companyForm.style.css"

const CompanyForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    address: "",
    ownedBy: "",
    active: "Yes",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("http://localhost:5000/companies/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        console.log("Company added successfully")
      } else {
        console.error("Failed to add user")
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className='company-form'>
      <h2>Add Company</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Company Name'
          name='companyName'
          value={formData.companyName}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Address'
          name='address'
          value={formData.address}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Owned By'
          name='ownedBy'
          value={formData.ownedBy}
          onChange={handleChange}
        />
        <select name='active' value={formData.active} onChange={handleChange}>
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        </select>
        <button type='submit'>Add Company</button>
      </form>
    </div>
  )
}

export default CompanyForm
