var express = require('express');
var router  = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send({
        profiles: [{
            username: 'minh',
            nickname: 'The Omnipotent',
            profileImage: 'assets/images/src/profile/minh.png'
        }, {
            username: 'darth',
            nickname: 'The Dark Side',
            profileImage: 'assets/images/src/profile/darth.png'
        }]
    });
});
module.exports = router;
