const express = require("express")
const db = require("../data/config")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try{
        const cars = await db("cars")
        res.status(200).json(cars)
    } catch(err){
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try{
        const [id] = await db("cars").insert(req.body)
        const newCar = await db("cars").where("id", id).first()

        res.status(201).json(newCar)
        
    } catch(err){
        next(err)
    }
})

module.exports = router