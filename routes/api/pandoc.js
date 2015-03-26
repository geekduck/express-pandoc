var express = require('express');
var router = express.Router();
var pdc = require('pdc');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.dir(req.query);

  pdc(req.query.srcText, req.query.from, req.query.to, function(err, result) {
    if (err){
      err.status = 400;
      return next(err);
    }

    res.send({
      'from': req.query.from,
      'to': req.query.to,
      'srcText': req.query.srcText,
      'dstText': result
    });
  });


});

module.exports = router;
