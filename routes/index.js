const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('../app/models/config');

router.get('/', (req, res, next) => {
    return res.render('index');
});

router.get('/register', (req, res, next) => {
	return res.render('register'); 
});

// This is the part that connects the front end to the back end 
// request.post goes to the backend router 4
router.post('/register', (req, res, next) => {
	request.post({
		url: config.apiUrl + '/users',
		form : req.body 
	}).pipe(res)
})
// piping response sends response back to script.js 

module.exports = router;
