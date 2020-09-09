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

function update(id, body){
    return db("cars").where("id", id).update(body)
}

function remove(id){
    return db("cars").where("id", id).del()
}

module.exports = {
    get,
    getById,
    add,
    update,
    remove,
}