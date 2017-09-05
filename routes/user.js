var express = require('express');
var router = express.Router();
var URL = require('url');
var {insertUserData, findUserData, removeUserData} = require('../db/userDb')
const tableName = 'user';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('editUser', { title: 'editUser' });
});

router.get('/user', function(req, res, next) {

  var params = URL.parse(req.url, true).query;
  findUserData( tableName, params, (data)=>{
    var response = {status:1,data:data};
    res.setHeader("content-type","application/json" )
    res.send(JSON.stringify(response));
  })

});

router.post('/user', function(req, res, next) {

console.log('insertUserData',req);
  var params = req.body;
  insertUserData(tableName, params, (result)=>{
      var response ;
      if(result && result.result && result.result.n){
        response = {status:1 ,data:{message: "数据添加成功"}};
      }else {
        response = {status:0 ,data:{message: "数据添加失败"}};
      }
      res.setHeader("content-type","application/json" )

     res.send(JSON.stringify(response));
  })

});

router.delete('/user', function(req, res, next) {
  var params = URL.parse(req.url, true).query;
  removeUserData(tableName , params, (result)=>{
    var response ;
    if(result && result.result && result.result.n){
      response = {status:1 ,data:{message: "数据删除成功"}};
    }else {
      response = {status:0 ,data:{message: "数据删除失败"}};
    }
    res.setHeader("content-type","application/json" )
    res.send(JSON.stringify(response));
  })

});

module.exports = router;
