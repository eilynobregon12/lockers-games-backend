require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const juegoRoutes = require('./routes/juegoRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const resenaRoutes = require('./routes/resenaRoutes');

const MONGODB_URL = "mongodb+srv://jovenescreativos:AngjYhQeY0KpTLuR@proyecto-final-jc.yhgniab.mongodb.net/tatiana";

app.use(express.json());

app.use("/api/juego", juegoRoutes);
app.use("/api/usuario", usuarioRoutes);
app.use("/api/resena", resenaRoutes);

mongoose.connect(MONGODB_URL)
  .then(() => {
    console.log('Conexion exitosa a MongoDB Atlas');
  })
  .catch(err => {
    console.log('Error de conexion', err.message);
    process.exit(1);
  });

app.listen(PORT, () => {
  console.log(`Servidor Corriendo en http://localhost:${PORT}`);
});