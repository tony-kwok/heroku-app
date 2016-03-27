var router = require('express').Router();

router.get('/', function(req, res) {
   res.json({
       message: 'Hi frm my first restful service...'
   });
});

module.exports = router;