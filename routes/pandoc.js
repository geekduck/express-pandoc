var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('pandoc', {
    title: 'pandoc',
    srclanguages: ['markdown', 'textile', 'html', 'rst', 'org'],
    srcName: 'srcLanguage',
    srcLabel: '変換前の言語',
    dstlanguages: ['textile', 'markdown', 'html', 'rst', 'org'],
    dstName: 'dstLanguage',
    dstLabel: '変換後の言語'
  });
});

module.exports = router;
