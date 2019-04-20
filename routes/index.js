var express = require('express');
var router = express.Router();
let landing=require('../controllers/landing');
/* GET home page. */
//for the http-get method this is what we will do the way we will handle such request on the route


//Creation routes
router.get('/',landing.get_landing );
router.post('/',landing.submit_lead);
//we passing the index handler from controllers  to handle this route
//defined a route that will handle the '/' route by calling a callback function that will do the stuff in its body
//it will respond to the matched route only

//listing the leads
router.get('/leads',landing.show_leads);
module.exports = router;
//we pass out the module for other files to use it