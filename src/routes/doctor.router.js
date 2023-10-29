const { getAll, create, getOne, remove, update, setImagesOfDoctors } = require('../controllers/doctor.controllers');
const express = require('express');

const routerDoctor = express.Router();

routerDoctor.route('/')
    .get(getAll)
    .post(create);

routerDoctor.route('/:id/images')
    .post(setImagesOfDoctors)

routerDoctor.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerDoctor;