const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());


mongoose.connect('mongodb+srv://jacobogarcesoquendo:aFJzVMGN3o7fA38A@cluster0.mqwbn.mongodb.net/tatiana-samuel')
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error(err));


app.use('/api/games', require('./routes/games'));
app.use('/api/reviews', require('./routes/reviews'));

app.listen(5000, () => {
  console.log('Servidor corriendo en puerto 5000');
});
