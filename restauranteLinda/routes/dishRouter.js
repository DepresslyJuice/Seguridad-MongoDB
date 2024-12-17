const express = require('express');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');
const Dishes=require('../models/dishes');
const dishRouter = express.Router();
dishRouter.use(bodyParser.json());
dishRouter.route('/')

.get((req,res,next)=>{
    Dishes.find({})
    .then((dishes)=>{
        res.statusCode=200;
        res.setHeader('Content-Type', 'aplication/json');
        res.json(dishes);
    }, (err) => next(err))
    .catch((err)=>next(err));
})

/*.get((req, res, next)=>{
    res.end('Enviamos todos los platos')
})

.post((req, res, next)=>{
    res.end('Agregar el plato: ' + req.body.name + ', ' + req.body.description);
})*/

.post((req, res, next)=>{
    Dishes.create(req.body)
    .then((dish)=>{
        console.log('Plato creado', dish);
        res.statusCode=200;
        res.setHeader('Content-Type', 'aplication/json');
        res.json(dish);
    }, (err) => next(err))
    .catch((err)=>next(err));
})

.put((req, res, next)=>{
    res.statusCode=403;
    res.end('Operacion PUT no válida en este endpoint')
})

.delete((req, res, next)=>{
    res.end('Eliminando todos los platos')
})

module.exports = dishRouter