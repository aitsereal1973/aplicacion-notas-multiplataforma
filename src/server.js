const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/notas', { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
