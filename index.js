const express = require("express")
const welcomeRoute = require("./welcome/welcome-route")
const carRoute = require("./cars/car-route")

const server = express()
const port = process.env.PORT || 4000

server.use(express.json())


//router endpoints here
server.use("/", welcomeRoute)
server.use("/cars", carRoute)

//default error route
server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "An error occured",
	})
})

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
}) 