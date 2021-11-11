var Animal = require('../models/animal'); 
 
// List of all animals 
exports.animal_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: animal list'); 
}; 
 
// for a specific animal. 
exports.animal_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: animal detail: ' + req.params.id); 
}; 
 
// Handle animal create on POST. 
exports.animal_create_post = async function(req, res) { 
    let document = new Animal();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    document.animal_name = req.body.animal_name;
    document.type = req.body.type;
    document.color = req.body.color;
    console.log(req.body);
    try {
      let result = await document.save();
      res.send(result);
    } catch (err) {
      res.status(500);
      res.send(`{"error": ${err}}`);
    }
}; 
 
// Handle animal delete form on DELETE. 
exports.animal_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: animal delete DELETE ' + req.params.id); 
}; 
 
// Handle animal update form on PUT. 
exports.animal_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: animal update PUT' + req.params.id); 
}; 

exports.animal_list = async function(req, res) { 
    try{ 
        theAnimals = await Animal.find(); 
        res.send(theAnimals); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

exports.animal_view_all_Page = async function(req, res) { 
    try{ 
        theAnimals = await Animal.find(); 
        res.render('animal', { title: 'Animals Search Results', results: theAnimals }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 