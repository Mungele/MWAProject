var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
var Transaction = require('./Transaction');

// CREATES A NEW Transaction
router.post('/', function (req, res) {
    console.log("in checkout post "+ req.body.uname );

        // var token = req.headers['x-access-token'];
        // if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
        //
        // jwt.verify(token, config.secret, function(err, decoded) {
        //     if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        //
        //
        //     User.findById(decoded.id, function (err, user) {
        //         if (err) return res.status(500).send("There was a problem finding the user.");
        //         if (!user) return res.status(404).send("No user found.");
        //
        //         res.status(200).send(user);
        //     });
        // });


    Transaction.create({
            uname: req.body.uname,
            email: req.body.email,
            paymentType: req.body.paymentType,
            amount: req.body.amount,
            cart:req.body.cart
        }, 
        function (err, user) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
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