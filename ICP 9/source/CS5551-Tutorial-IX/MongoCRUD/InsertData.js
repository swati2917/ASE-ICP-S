/**
 * Created by mnpw3d on 20/10/2016.
 */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://root:Sw@ti2917@ds019766.mlab.com:19766/asedemo';
//var url = 'mongodb://marmik:2621@ds051923.mlab.com:51923/demo';
var insertDocument = function(db, callback) {
    db.collection('user').insertOne( {
        "fname" : "Swati",
        "lname" : "Singh",
        "address":{
            "city":"Kansas City",
            "state":"MO"
        },
        "education" : {
            "university":"UMKC",
            "degree":"Master of Science",
            "major":"Computer Science"
        },
        "mail":"ss3m6@mail.umkc.edu"
    }, function(err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into the asedemo collection.");
        callback();
    });
};
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    insertDocument(db, function() {
        db.close();
    });
});