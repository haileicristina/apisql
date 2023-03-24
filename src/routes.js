const express = require('express')

const UserController = require('./controllers/UserController')
const AddressController = require('./controllers/AddressController')
const TechController = require('./controllers/TechController');
const ReportController = require('./controllers/ReportController');

const routes = express.Router();

routes.get('/users',UserController.index);
routes.get('/users/:id/name',UserController.nameUser);
routes.get('/users/name',UserController.nameAllUser);
routes.post('/users', UserController.store);

routes.get('/users/:user_id/addresses', AddressController.index) //usuario especifico
routes.post('/users/:user_id/addresses', AddressController.store)

routes.get('/users/:user_id/techs', TechController.index) 
routes.get('/users/:user_id/techsName', TechController.forName) 
routes.post('/users/:user_id/techs', TechController.store)
routes.delete('/users/:user_id/techs', TechController.delete)

routes.get('/school', TechController.listSchoolTech)
routes.put('/techs/:id/school/:id', TechController.updateSchool);
routes.post('/school/:tech_id/tech', TechController.createSchoolTech)


routes.get('/report', ReportController.show)


module.exports = routes;