var express = require('express');
var route = express.Router();
var apiCtrl = require('../controller/api/api.student.js')

// Add routes
route.get('/student', apiCtrl.get);
route.post('/student', apiCtrl.post);
route.put('/student/:id', apiCtrl.put);
route.delete('/student/:id', apiCtrl.delete);

module.exports = route;
