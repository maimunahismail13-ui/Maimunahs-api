Maimunah Assignment - Student Management REST API
A simple Node.js and Express API for managing students. Data is kept in a JavaScript array, so it resets when the server restarts.
How to run
npm install express
node "Maimunah Assignment.js"

The server runs on http://localhost:3000
Endpoints
Method
URL
What it does
POST
/students
Add a new student
GET
/students
Get all students
GET
/students/:id
Get one student
PUT
/students/:id
Update a student
DELETE
/students/:id
Delete a student
An Example:
{
  "name": "Aisha Bello",
  "age": 20,
  "email": "aisha@example.com",
  "course": "Mathematics"
}


