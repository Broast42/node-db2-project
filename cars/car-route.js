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

router.put("/:id", async (req, res, next) => {
    try{
        const updated = await db.update(req.params.id, req.body)

        res.status(200).json(updated);
    } catch(err){
        next(err)
    }
})

router.delete("/:id", async (req, res, next) => {
    try{
        const deleted = await db.remove(req.params.id)

        res.status(200).json(deleted)
    } catch(err){
        next(err)
    }
})


module.exports = router