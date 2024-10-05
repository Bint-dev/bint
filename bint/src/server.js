// server.js
import express from "express";
import bodyParser from "body-parser";
import { registerUser } from "../src/InicioSession/register.js";
import { loginUser } from "../src/InicioSession/login.js";
import { pool } from "../src/database/conectionPost.js"; // Importa la conexión a la base de datos

const app = express();
const port = 3000;

// Middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.json());

// Ruta para registrar un nuevo usuario
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    await registerUser(username, password);
    res.status(201).send("User registered successfully");
  } catch (error) {
    res.status(500).send("Error registering user");
  }
});

// Ruta para iniciar sesión
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    await loginUser(username, password);
    res.status(200).send("Login successful");
  } catch (error) {
    res.status(500).send("Error logging in");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
