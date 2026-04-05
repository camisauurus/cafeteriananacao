const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
    it("Obteniendo status 200 y un arreglo con al menos un objeto", async () => {
        const response = await request(server).get("/cafes").send()
        expect(response.statusCode).toBe(200)
        expect(response.body).toBeInstanceOf(Array)
        expect(response.body.length).toBeGreaterThan(0)
    })
    it("Obteniendo 404 al intentar eliminar un id inexistente", async () => {
        const jwt = "token_cualquiera"
        const idInexistente = 999
        const response = await request(server)
            .delete(`/cafes/${idInexistente}`)
            .set("Authorization", jwt)
            .send()
        expect(response.statusCode).toBe(404)
    })
    it("Agregando un nuevo café y obteniendo código 201", async () => {
        const nuevoCafe = { id: 5, nombre: "Latte" }
        const response = await request(server)
            .post("/cafes")
            .send(nuevoCafe)
        expect(response.statusCode).toBe(201)
        expect(response.body).toContainEqual(nuevoCafe)
    })
    it("PUT /cafes/:id devuelve status 400 si los IDs no coinciden", async () => {
        const idEnParametro = 1
        const cafeConIdDiferente = { id: 2, nombre: "Espresso" }
        const response = await request(server)
            .put(`/cafes/${idEnParametro}`)
            .send(cafeConIdDiferente)
        expect(response.statusCode).toBe(400)
    });
})
