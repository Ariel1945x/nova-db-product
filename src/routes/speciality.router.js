const { getAll, create, getOne, remove, update } = require('../controllers/speciality.controllers');
const express = require('express');

const routerSpeciality = express.Router();

routerSpeciality.route('/')
    .get(getAll)
    .post(create);

routerSpeciality.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerSpeciality;