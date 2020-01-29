const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({ messa });
});

app.listen(3333);