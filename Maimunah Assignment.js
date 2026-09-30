const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// students are stored in this array instead of a real database
let students = [];
let nextId = 1;

// checks the student details and returns an error message if something is wrong
function validateStudent(data, isUpdate) {
  const { name, age, email } = data;

  if (!isUpdate && (!name || !email)) {
    return "Name and email are required";
  }
  if (name !== undefined && (typeof name !== "string" || name.trim() === "")) {
    return "Name must be a non-empty string";
  }
  if (age !== undefined && (!Number.isInteger(age) || age < 1 || age > 120)) {
    return "Age must be a whole number between 1 and 120";
  }
  if (email !== undefined && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Email format is not valid";
  }
  return null;
}

// add a new student
app.post("/students", (req, res) => {
  const error = validateStudent(req.body, false);
  if (error) {
    return res.status(400).json({ message: error });
  }
