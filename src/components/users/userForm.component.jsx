import React, { useState } from "react"
import { useParams } from "react-router-dom"
import "./userform.styles.css"

const UserForm = () => {
  const { companyId } = useParams()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    companyId: companyId,
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch("http://localhost:5000/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        console.log("User added successfully")
        history.push("/success-page")
      } else {
        console.error("Failed to add user")
        history.push("/error-page")
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  console.log(companyId)

  return (
    <div className='user-form'>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='First Name'
          name='firstName'
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Last Name'
          name='lastName'
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder='Email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Role'
          name='role'
          value={formData.role}
          onChange={handleChange}
        />

        <button type='submit'>Add User</button>
      </form>
    </div>
  )
}

export default UserForm
