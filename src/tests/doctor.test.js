const request = require('supertest');
const app = require('../app');
const Image = require('../models/Image')
require('../models')

let id;

test("Post /doctors", async() => {
    const body = {
        firstName: "Sisifo",
        lastName: "Atlas",
        descript: "titanes castigados",
    }
    const res = await request(app).post("/doctors").send(body)
    id = res.body.id
    expect(res.status).toBe(201)
})

test("Get /doctors", async() => {
    const res = await request(app).get("/doctors")
    expect(res.status).toBe(200)
})

test("Put /doctors/:id", async() => {
    const body = {
        firstName: "Sisifo",
        lastName: "Atlas",
        descript: "titanes castigados",
    }
    const res = await request(app).put(`/doctors/${id}`).send(body)
    expect(res.status).toBe(200)
})

test("Post /doctors/:id/images", async() => {
    const image = await Image.create({ url: 'https://alamadre.jpg', publicId: 'id' })
    const res = await request(app).post(`/doctors/${id}/images`).send([image.id])
    image.destroy()
    expect(res.status).toBe(200)
})

test("Delete /doctors/:id", async() => {
    const res = await request(app).delete(`/doctors/${id}`)
    expect(res.status).toBe(204)
})