const mongodb = require('mongodb'); 
const MongoClient = mongodb.MongoClient; 

let _db;

const mongoConnect = (callback) => {
    MongoClient.connect(
        'mongodb+srv://Whitney-Chase-01:nitney15020@cluster01.clet0.mongodb.net/<dbname>?retryWrites=true&w=majority'
        )
    .then(client => {
        console.log('Connected!');
        _db = client.db();
        callback();
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
};

const getDb = () => {
    if (_db) {
      return _db;
    }
    throw 'No database found!';
  };
  
  exports.mongoConnect = mongoConnect;
  exports.getDb = getDb;
