var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
// router.use(bodyParser.json());
// var User = require('../user/User');
//
// var jwt = require('jsonwebtoken');
// var config = require('../config');

router.post('/', function(req, res) {

//when user logs in using facebook we store information if doesn't already exist
    User.create({
            firstName: req.body.firstname,
            lastName: req.body.lastname,
            userName : req.body.name,
            email : req.body.email,
        },
        function (err, user) {
            if (err) return res.status(500).send("There was a problem logging user.")
            // create a token
            var token = jwt.sign({ id: user._id }, config.secret, {
                expiresIn: 86400 // expires in 24 hours
            });
            res.status(200).send({ auth: true, token: token });
        });
});

router.get('/', function(req, res) {
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
