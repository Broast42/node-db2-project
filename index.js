const express = require("express")


const server = express()
const port = process.env.PORT || 4000

server.use(express.json())


//router endpoints here


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