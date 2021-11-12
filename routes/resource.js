var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var animal_controller = require('../controllers/animal'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// animal ROUTES /// 
 
// POST request for creating a animal.  
router.post('/resource/animal', animal_controller.animal_create_post); 
 
// DELETE request to delete animal. 
router.delete('/resource/animal/:id', animal_controller.animal_delete); 
 
// PUT request to update animal. 
router.put('/resource/animal/:id', 
animal_controller.animal_update_put); 
 
// GET request for one animal. 
router.get('/resource/animal/:id', animal_controller.animal_detail); 
 
// GET request for list of all animal items. 
router.get('/resource/animal', animal_controller.animal_list); 
 
module.exports = router;