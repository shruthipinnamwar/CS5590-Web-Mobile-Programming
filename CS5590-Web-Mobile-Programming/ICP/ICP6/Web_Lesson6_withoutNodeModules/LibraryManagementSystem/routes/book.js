var express = require('express');
var router = express.Router();
var Book = require('../models/Book.js');

/* GET ALL BOOKS */
router.get('/', function (req, res, next) {
  Book.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE BOOK BY ID */
router.get('/:id', function (req, res, next) {
  Book.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE BOOK */
router.post('/', function (req, res, next) {
  Book.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE BOOK */


router.put('/:id', function (req, res, next) {
  Book.updateOne(req.params.id, function (err, put) {
    if (err) return next(err);
    res.json(update);
  });
});




/* DELETE BOOK */





router.delete('/:id', function (req, res, next) {
  Book.findByIdAndDelete(req.params.id, function (err, deleteOne) {
    if (err) return next(err);
    res.json(delete);
  });
});


// router.delete('/:id', function (req, res, next) {
//   Book.remove(req.params.id, function (err, remove) {
//     if (err) return next(err);
//     res.json(remove);
//   });
// });




module.exports = router;
