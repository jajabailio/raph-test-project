class User {
  constructor(id, companyId, firstName, lastName, email, role) {
    this.id = id
    this.companyId = companyId
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.role = role
  }
}

module.exports = User
