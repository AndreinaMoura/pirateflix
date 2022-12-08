const express = require("express");
const cors = require("cors");

const filmes = require('../back/src/routes/filmes')

const app = express()
    .use(express.json())
    .use(cors())
    .use(filmes)

app.listen(3000, () => {
    console.log('Funciona');
})
