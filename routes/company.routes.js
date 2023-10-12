const express = require("express")
const router = express.Router()
const fs = require("fs")
const Company = require("../models/Company")

function readDataFromJsonFile(filePath) {
  const data = fs.readFileSync(filePath, "utf8")
  return JSON.parse(data)
}

function writeDataToJsonFile(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8")
}

router.post("/companies", (req, res) => {
  const { companyName, address, ownedBy, active } = req.body
  const companies = readDataFromJsonFile("data/companies.json")
  const newCompanyId = companies.length + 1

  const newCompany = new Company(
    newCompanyId,
    companyName,
    address,
    ownedBy,
    active
  )

  companies.push(newCompany)

  writeDataToJsonFile("data/companies.json", companies)

  res.json(newCompany)
})

router.put("/companies/:id", (req, res) => {
  const companyId = parseInt(req.params.id)
  const { companyName, address, ownedBy, active } = req.body
  const companies = readDataFromJsonFile("data/companies.json")

  const companyToUpdate = companies.find((company) => company.id === companyId)

  if (!companyToUpdate) {
    return res.status(404).json({ message: "Company not found" })
  }

  companyToUpdate.companyName = companyName
  companyToUpdate.address = address
  companyToUpdate.ownedBy = ownedBy
  companyToUpdate.active = active

  writeDataToJsonFile("data/companies.json", companies)

  res.json(companyToUpdate)
})

router.get("/companies", (req, res) => {
  const companies = readDataFromJsonFile("data/companies.json")
  const users = readDataFromJsonFile("data/companies.json")

  const companiesWithUserCount = companies.map((company) => {
    const userCount = users.filter(
      (user) => user.companyId === company.id
    ).length
    return { ...company, userCount }
  })

  res.json(companiesWithUserCount)
})

module.exports = router
