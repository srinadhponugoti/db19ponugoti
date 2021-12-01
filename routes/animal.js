var express = require('express'); 
const animal_controlers= require('../controllers/animal'); 
var router = express.Router(); 

const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
 
/* GET animals */ 
router.get('/', animal_controlers.animal_view_all_Page ); 

/* GET detail animal page */ 
router.get('/detail', animal_controlers.animal_view_one_Page); 

/* GET create animal page */ 
router.get('/create',secured, animal_controlers.animal_create_Page);

/* GET update animal page */ 
router.get('/update',secured, animal_controlers.animal_update_Page);

/* GET delete animal page */ 
router.get('/delete',secured, animal_controlers.animal_delete_Page);

module.exports = router; 