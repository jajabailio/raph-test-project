const express = require("express")
const router = express.Router()
const fs = require("fs")
const User = require("../models/User")

function readDataFromJsonFile(filePath) {
  const data = fs.readFileSync(filePath, "utf8")
  return JSON.parse(data)
}

function writeDataToJsonFile(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8")
}

router.post("/users", (req, res) => {
  const { companyId, firstName, lastName, email, role } = req.body
  const users = readDataFromJsonFile("data/users.json")
  const newUserId = users.length + 1

  const newUser = new User(
    newUserId,
    companyId,
    firstName,
    lastName,
    email,
    role
  )

  users.push(newUser)

  writeDataToJsonFile("data/users.json", users)

  res.json(newUser)
})

router.put("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id)
  const { companyId, firstName, lastName, email, role } = req.body
  const users = readDataFromJsonFile("data/users.json")

  const userToUpdate = users.find((user) => user.id === userId)

  if (!userToUpdate) {
    return res.status(404).json({ message: "User not found" })
  }

  userToUpdate.companyId = companyId
  userToUpdate.firstName = firstName
  userToUpdate.lastName = lastName
  userToUpdate.email = email
  userToUpdate.role = role

  writeDataToJsonFile("data/users.json", users)

  res.json(userToUpdate)
})

router.get("/users/:companyId", (req, res) => {
  const companyId = parseInt(req.params.companyId)
  const users = readDataFromJsonFile("data/users.json")

  const usersUnderCompany = users.filter((user) => user.companyId === companyId)

  res.json(usersUnderCompany)
})

module.exports = router
