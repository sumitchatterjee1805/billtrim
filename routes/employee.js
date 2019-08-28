const express = require('express');
const multer  = require('multer');

const routes = express.Router();
const upload = multer({ dest: '../uploads/' });

const employeeController = require('../controllers/employee');
const docController = require('../controllers/doc');

routes.post('/', employeeController.postEmployee);

routes.patch('/:employee_id', employeeController.patchEmployee);

routes.delete('/:employee_id', employeeController.deleteEmployee);

routes.post('/documents/:employee_id', upload.single('file'), docController.uploadDoc);

module.exports = routes;