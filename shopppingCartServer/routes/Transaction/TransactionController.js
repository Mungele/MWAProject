//Author:  Aisha Kulindwa
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var admin = require("firebase-admin");
var serviceAccount = require("../../serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://shoppingcart-37c45.firebaseio.com"
});


//router.use(bodyParser.urlencoded({ extended: true }));
var Transaction = require('./Transaction');

// CREATES A NEW Transaction
router.post('/', function (req, res) {
    console.log("in checkout post "+ req.body.trans.email );

     var token = req.body.token;
     if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

     admin.auth().verifyIdToken(token)
        .then(function(decodedToken) {
            var uid = decodedToken.uid;
            // ...

            if (uid === req.body.uid) {
                console.log(uid+" is  equal to "+ req.body.uid );
                Transaction.create({
                        uname: req.body.trans.uname,
                        email: req.body.trans.email,
                        paymentType: req.body.trans.paymentType,
                        amount: req.body.trans.amount,
                        cart: req.body.trans.cart
                    },
                    function (err, user) {
                        if (err) return res.status(500).send("There was a problem adding the information to the database.");
                        res.status(200).send(user);
                    });
            }
            console.log(uid+" is not equal to "+ req.body.uid );
        }).catch(function(error) {
        // Handle error
    });
});

// RETURNS ALL THE Transactions IN THE DATABASE
router.get('/', function (req, res) {
    console.log("am in db get");
    Transaction.find({}, function (err, products) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        console.log("the products are"+ products)
        res.status(200).send(products);
    });
});

// GETS A SINGLE Transaction FROM THE DATABASE
router.get('/:id', function (req, res) {
    Transaction.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
    });
});

// DELETES A Transaction FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Transaction.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User: "+ user.name +" was deleted.");
    });
});

// UPDATES A SINGLE Transactions IN THE DATABASE
router.put('/:id', function (req, res) {
    Transaction.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    });
});


module.exports = router;