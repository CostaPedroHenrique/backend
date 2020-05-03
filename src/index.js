const express = require('express');
const routes = require("./routes");
const app = express();
const path = require('path');


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(
    "/files", 
    express.static(path.resolve(__dirname,'..', 'tmp', 'uploads')));


app.use(routes);

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({error: error.message});
});

app.listen("3333");
