var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
var Product = require('./Product');

// CREATES A NEW PRODUCT
router.post('/', function (req, res) {
    Product.create({
            name: string,
            category: string,
            quantity: number,
            availavility: boolean,
            details:string,
            price: number,
            url: string
        }, 
        function (err, user) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
        });
});

// RETURNS ALL THE PRODUCTS IN THE DATABASE
router.get('/', function (req, res) {
    console.log("am in db get");
    Product.find({}, function (err, products) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        console.log("the products are"+ products)
        res.status(200).send(products);
    });
});

// GETS A SINGLE PRODUCT FROM THE DATABASE
router.get('/:id', function (req, res) {
    Product.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
    });
});

// DELETES A PRODUCT FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User: "+ user.name +" was deleted.");
    });
});

// UPDATES A SINGLE PRODUCTS IN THE DATABASE
router.put('/:id', function (req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    });
});


module.exports = router;