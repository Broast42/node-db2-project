const express = require("express")
const db = require("./cardb")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try{
        const cars = await db.get()
        res.status(200).json(cars)
    } catch(err){
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try{
        const [id] = await db.add(req.body)
        const newCar = await db.getById(id)

        res.status(201).json(newCar)

    } catch(err){
        next(err)
    }
})

module.exports = router