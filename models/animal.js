const mongoose = require("mongoose") 
const animalSchema = mongoose.Schema({ 
 name: String, 
 type: String, 
 color: String 
}) 
 
module.exports = mongoose.model("Animal", 
animalSchema) 