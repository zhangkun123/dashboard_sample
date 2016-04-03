var express = require('express');
var fs = require("fs");
var router = express.Router();

router.get('/', function(req, res, next) {
    var json = readJsonFileSync();
    var videoId = req.query.videoId;
    var comments = [];
    for (var index = 0; index < json.comments.length; index++) {
        if (json.comments[index].videoId === videoId) {
            comments.unshift(json.comments[index]);
        }
    }
    res.send({
        file: comments
    });
});

router.post('/', function(req, res, next) {
    var json = readJsonFileSync();
    var newComment = req.body;
    json.comments.push(newComment);
    var newFile = JSON.stringify(json);
    var saved = false;
    fs.writeFileSync("json/comment.json", newFile, 'utf8');
    res.send({
        saved: 'success'
    });
});

function readJsonFileSync() {
    var file = fs.readFileSync("json/comment.json", 'utf8');
    return JSON.parse(file);
}

module.exports = router;
