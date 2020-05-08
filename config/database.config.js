module.exports = {
    url: 'mongodb+srv://dhandy:dhandy@cluster0-u9tgb.mongodb.net/test?retryWrites=true&w=majority'
}


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://dhandy:dhandy@cluster0-u9tgb.mongodb.net/test?retryWrites=true&w=majority";
MongoClient(url, { useNewUrlParser: true,  useUnifiedTopology: true });
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  dbo.createCollection("notes", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});