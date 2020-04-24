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

    } catch(err){
        next(err)
    }
})

module.exports = router