const Doctor = require("./Doctor")
const Speciality = require("./Speciality")
const Image = require("./Image")

Speciality.hasMany(Doctor)
Doctor.belongsTo(Speciality)

Doctor.hasMany(Image)
Image.belongsTo(Doctor)