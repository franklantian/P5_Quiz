const express = require('express');
const {models} = require('../models/index');
const router = express.Router();
const Sequelize = require('sequelize');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/credits',function(req, res, next) {

    res.render('credits', { title: 'Credits',autor: 'TIAN LAN'} );
});

router.get('/quizzes',function(req, res, next) {
    models.quiz.findAll()
        .then(quiz => {
        res.render('quizzes/index.ejs', {title: 'Quizzes', quizzes: quiz});
        })
        .catch(function (error){
        errorlog(error.message);
        })

});
module.exports = router;
