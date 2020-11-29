const express = require('express');
const router = express.Router();

const dummyData = require('../../data/ta10-data.json')
let duplicate = [];

const asyncRoute = route => (req, res, next = console.error) =>
  Promise.resolve(route(req, res)).catch(next)

router.get('/', (req, res, next) => {
    res.render('pages/prove10', {
        title: 'Prove 10',
        path: '/prove10',
    });
});

router.get('/fetchAll', (req, res, next) => {
    let array =  json(dummyData);
    
    array.array.forEach(element => {
        if(array[element].name != element.name){
            res.json(array)
       }else{
            duplicate.push(array[element]);
       }
    });

});

router.post('/insert', (req, res, next) => {
    let array = json(dummyData);
    array.array.forEach(element => {
        if(array[element].name != element.name){
            res.json(array)
       }else{
            duplicate.push(array[element]);
       }
    });
});

module.exports = router;