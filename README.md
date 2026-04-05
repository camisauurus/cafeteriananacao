# Cafetería Nanacao - API Testing

Este proyecto consiste en la implementación de tests unitarios para una API REST de una cafetería, utilizando el framework Jest y la librería Supertest. El objetivo es asegurar que las operaciones CRUD (Crear, Leer, Actualizar y Eliminar) funcionen correctamente tras los fallos reportados en el sistema de administración.

🛠️ Tecnologías utilizadas <br>
Node.js <br>
Express <br>
Jest <br>
Supertest <br>

📋 Requerimientos del Desafío
Se han implementado tests para validar los siguientes puntos: <br>
GET /cafes: Retorna un status code 200 y un arreglo con al menos un objeto. <br>
DELETE /cafes/:id: Retorna un código 404 al intentar eliminar un café con un ID inexistente. <br>
POST /cafes: Agrega un nuevo café y retorna un código 201. <br>
PUT /cafes/:id: Retorna un código 400 si el ID del parámetro es diferente al ID enviado en el cuerpo (payload). <br>
