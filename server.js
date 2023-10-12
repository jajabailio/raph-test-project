const express = require("express")
const bodyParser = require("body-parser")
const companyRoutes = require("./routes/company.routes")
const userRoutes = require("./routes/user.routes")
const cors = require("cors") // Import the cors middleware

const app = express()
const port = process.env.PORT || 5000

app.use(cors()) // Enable CORS for all routes
app.use(bodyParser.json())

app.use("/", companyRoutes)
app.use("/", userRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
