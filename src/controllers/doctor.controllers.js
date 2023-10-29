const catchError = require('../utils/catchError');
const Doctor = require('../models/Doctor');
const Speciality = require('../models/Speciality');
const Image = require('../models/Image');

const getAll = catchError(async(req, res) => {
    const results = await Doctor.findAll({ include: [Speciality, Image] });
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Doctor.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Doctor.findByPk(id, { include: [Speciality, Image] });
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Doctor.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Doctor.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

const setImagesOfDoctors = catchError(async(req, res) => {
    const {id} = req.params
    const doctors = await Doctor.findByPk(id)
    await doctors.setImages(req.body)
    const images = await doctors.getImages()
    return res.json(images)
})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setImagesOfDoctors
}