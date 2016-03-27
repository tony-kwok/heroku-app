var router = require('express').Router();
var cors = require('cors');

router.use(cors());

router.get('/', function(req, res) {
   res.json({
       message: 'Hi frm my first restful service...'
   });
});

module.exports = router;