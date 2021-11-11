const mongoose = require("mongoose") 
const animalSchema = mongoose.Schema({ 
 animal_name: String, 
 type: String, 
 color: String 
}) 
 
module.exports = mongoose.model("Animal", 
animalSchema) 