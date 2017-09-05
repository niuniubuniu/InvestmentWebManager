var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://127.0.0.1:27017/p2';
var ObjectId = require('mongodb').ObjectId;
var test = require('assert');

var insertUPData = (table, data, callback)=>{
  MongoClient.connect(DB_CONN_STR, function(err, db) {
      console.log("连接成功！");
      console.log('insertUPData', data);
      var collection = db.collection(table);
      collection.insert(data, function(err, result) {
          if(err)
          {
              console.log('Error:'+ err);
              return;
          }
          console.log(result);
          db.close();
          callback(result)
      });
  });
}

var removeUPData = (table, data, callback)=>{
  let sel = data;
  if (data['_id']) {
    sel = {_id: ObjectId(data['_id'])}
  }

  MongoClient.connect(DB_CONN_STR, function(err, db) {
      console.log("连接成功！");
      var collection = db.collection(table); //连接到表 projects
      collection.remove(sel, {w:1}, function(err, r) {
          if(err)
          {
              console.log('Error:'+ err);
              return;
          }
          console.log('result:',r);
          db.close();
          callback(r)
      });
  });
}

// var updateUPsData = (table,keys, data, callback)=>{
//   if (!data.productName && (typeOf(data)== 'object'))  reurn;
//   MongoClient.connect(DB_CONN_STR, function(err, db) {
//       console.log("连接成功！");
//       var collection = db.collection(table); //连接到表 projects
//       collection.update(keys,{$set:data},{multi:true},function(err, result) {
//           if(err)
//           {
//               console.log('Error:'+ err);
//               return;
//           }
//           console.log(result);
//           db.close();
//       });
//   });
// }
var findUPData = (table, keys, callback)=>{
  MongoClient.connect(DB_CONN_STR, function(err, db) {
      console.log("连接成功！");
      var collection = db.collection(table); //连接到表 projects
      var result = [];
      collection.find(keys).forEach(function(doc) {

        result.push(doc);
      }, function(err) {
        db.close();
        callback(result)
      });
  });
}


module.exports = {insertUPData, findUPData, removeUPData};
