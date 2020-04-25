const db = require("../data/config")

function get(){
    return db("cars")
}

function getById(id){
    return db("cars").where("id", id).first()
}

function add(body){
    return db("cars").insert(body)
}

module.exports = {
    get,
    getById,
    add,
}