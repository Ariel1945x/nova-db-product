const express = require('express');
const routerSpeciality = require('./speciality.router');
const routerDoctor = require('./doctor.router');
const routerImage = require('./image.router');
const router = express.Router();

// colocar las rutas aquí
router.use("/specialities", routerSpeciality)
router.use("/doctors", routerDoctor)
router.use("/images", routerImage)


module.exports = router;