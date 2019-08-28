const express = require('express');
const routes = express.Router();

const employeeController = require('../controllers/employee');

routes.post('/', employeeController.postEmployee);

routes.patch('/:employee_id', employeeController.patchEmployee);

routes.delete('/:employee_id', employeeController.deleteEmployee);

module.exports = routes;