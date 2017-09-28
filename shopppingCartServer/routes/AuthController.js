//Author:  Aisha Kulindwa
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var User = require('./User');

var jwt = require('jsonwebtoken');
var config = require('../config');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/', function(req, res) {
console.log("Am in auth post " + req.body.firstName+req.body.lastName+
        req.body.UserName+
         req.body.email);
//when user logs in using facebook we store information if doesn't already exist

    User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName : req.body.UserName,
            email : req.body.email,
        },
        function (err, user) {
            if (err){console.log(err); return res.status(500).send("There was a problem logging user.")}
            // create a token
            console.log(user);
            var token = jwt.sign({ id: user._id }, config.secret, {
                expiresIn: 86400 // expires in 24 hours
            });
            res.status(200).send({ auth: true, token: token });
        });
});

router.get('/payment', function(req, res) {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, config.secret, function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });


        User.findById(decoded.id, function (err, user) {
            if (err) return res.status(500).send("There was a problem finding the user.");
            if (!user) return res.status(404).send("No user found.");

            res.status(200).send(user);
        });
    });
});

//note necessary coz the token will be destroyed in client
router.get('/logout', function(req, res) {
    res.status(200).send({ auth: false, token: null });
});

module.exports = router;
