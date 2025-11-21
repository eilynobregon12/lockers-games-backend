const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors({
  origin: "*",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type"
}));

app.use(express.json());



mongoose.connect("mongodb+srv://jovenescreativos:AngjYhQeY0KpTLuR@proyecto-final-jc.yhgniab.mongodb.net/tatiana")
  .then(() => console.log("Mongo conectado"))
  .catch(err => console.log(err));


app.use("/api/juego", require("./routes/juegoRoutes"));
app.use("/api/resena", require("./routes/resenaRoutes"));


app.listen(5000, () => {
  console.log("Servidor corriendo en http://localhost:5000");
});