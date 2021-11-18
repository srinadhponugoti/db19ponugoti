var Animal = require('../models/animal'); 
 

 
// for a specific animal.  
    exports.animal_detail = async function(req, res) { 
        console.log("detail"  + req.params.id) 
        try { 
            result = await Animal.findById( req.params.id) 
            res.send(result) 
        } catch (error) { 
            res.status(500) 
            res.send(`{"error": document for id ${req.params.id} not found`); 
        } 
}; 
 
// Handle animal create on POST. 
exports.animal_create_post = async function(req, res) { 
    let document = new Animal();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    document.name = req.body.name;
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
exports.animal_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Animal.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    }
}; 
 
// Handle animal update form on PUT. 
exports.animal_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Animal.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.animal_name) toUpdate.animal_name = req.body.animal_name; 
        if(req.body.type) toUpdate.type = req.body.type; 
        if(req.body.color) toUpdate.color = req.body.color; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    }  
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
 
exports.animal_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Animal.findById( req.query.id) 
        res.render('animaldetail',  
  { title: 'Animal Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
  }; 
  
  // Handle building the view for creating a animal. 
  // No body, no in path parameter, no query. 
  // Does not need to be async 
  exports.animal_create_Page =  function(req, res) { 
      console.log("create view") 
      try{ 
          res.render('animalcreate', { title: 'Animal Create'}); 
      } 
      catch(err){ 
          res.status(500) 
          res.send(`{'error': '${err}'}`); 
      } 
  }; 
  
  // Handle building the view for updating a animal. 
  // query provides the id 
  exports.animal_update_Page =  async function(req, res) { 
      console.log("update view for item "+req.query.id) 
      try{ 
          let result = await Animal.findById(req.query.id) 
          res.render('animalupdate', { title: 'Animal Update', toShow: result }); 
      } 
      catch(err){ 
          res.status(500) 
          res.send(`{'error': '${err}'}`); 
      } 
  }; 
  
  // Handle a delete one view with id from query 
  exports.animal_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Animal.findById(req.query.id) 
        res.render('animaldelete', { title: 'Animal Delete', toShow: 
  result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
  }; 