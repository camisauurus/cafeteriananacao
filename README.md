# Cafetería Nanacao - API Testing

Este proyecto consiste en la implementación de tests unitarios para una API REST de una cafetería, utilizando el framework Jest y la librería Supertest. El objetivo es asegurar que las operaciones CRUD (Crear, Leer, Actualizar y Eliminar) funcionen correctamente tras los fallos reportados en el sistema de administración.

🛠️ Tecnologías utilizadas
Node.js
Express
Jest 
Supertest

📋 Requerimientos del Desafío
Se han implementado tests para validar los siguientes puntos:
GET /cafes: Retorna un status code 200 y un arreglo con al menos un objeto.
DELETE /cafes/:id: Retorna un código 404 al intentar eliminar un café con un ID inexistente.
POST /cafes: Agrega un nuevo café y retorna un código 201.
PUT /cafes/:id: Retorna un código 400 si el ID del parámetro es diferente al ID enviado en el cuerpo (payload).
