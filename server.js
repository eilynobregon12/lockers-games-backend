require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

const juegoRoutes = require('./routes/juegoRoutes');
const resenaRoutes = require('./routes/resenaRoutes');

const MONGODB_URL = "mongodb+srv://jovenescreativos:AngjYhQeY0KpTLuR@proyecto-final-jc.yhgniab.mongodb.net/tatiana";

app.use(cors({
  origin: "http://localhost:5173",   
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
}));

app.use(express.json());

app.use("/api/juego", juegoRoutes);
app.use("/api/resena", resenaRoutes);

mongoose.connect(MONGODB_URL)
  .then(() => {
    console.log('Conexion exitosa a MongoDB Atlas');
    app.listen(PORT, () => {
      console.log(`Servidor Corriendo en http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.log('Error de conexion', err.message);
    process.exit(1);
  });
