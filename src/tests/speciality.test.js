const request = require('supertest');
const app = require('../app');
require('../models')

let id;

test("Post /specialities", async() => {
    const body = {
        speDoc: "traumatologia"
    }
    const res = await request(app).post("/specialities").send(body)
    id = res.body.id
    expect(res.status).toBe(201)
})

test("Get /specialities", async() => {
    const res = await request(app).get("/specialities")
    expect(res.status).toBe(200)
})

test("Put /specialities/:id", async() => {
    const body = {
        speDoc: "traumatologia"
    }
    const res = await request(app).put(`/specialities/${id}`).send(body)
    expect(res.status).toBe(200)
})

test("Delete /specialities/:id", async() => {
    const res = await request(app).delete(`/specialities/${id}`)
    expect(res.status).toBe(204)
})