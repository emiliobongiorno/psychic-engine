"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var app = express();
var port = 3000;
var module_1 = require();
app.post('/api/v1/tasks', function (req, res) {
    var task = req.body;
    try {
        (0, module_1.saveTask)(task);
    }
    catch (error) {
        console.log(error);
    }
    res.send('Got a POST request');
});
app.get('/api/v1/tasks', function (req, res) {
    try {
        var tasks = (0, module_1.getTasks)();
        res.send(tasks);
    }
    catch (error) {
        console.log(error);
    }
    res.send('Got a POST request');
});
app.get('/api/v1/tasks/:id', function (req, res) {
    var taskId = req.params.id;
    try {
        var task = (0, module_1.getTask)(taskId);
        res.send(task);
    }
    catch (error) {
        console.log(error);
    }
});
app.put('/api/v1/tasks/:id', function (req, res) {
    res.send('Got a POST request');
});
app.delete('/api/v1/tasks/:id', function (req, res) {
    res.send('Got a POST request');
});
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
