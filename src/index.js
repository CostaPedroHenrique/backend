const express = require('express');
const routes = require("./routes");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.use(express.urlencoded({extended: true}));


app.use(routes);

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({error: error.message});
});

app.listen("3333");
