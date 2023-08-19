const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {

    res.send('Baguncinha    !');

});


app.listen(PORT, () => {
    console.info(`Servidor rodando na porta http://localhost:${PORT}`)
})