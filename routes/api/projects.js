var express = require('express');
var router = express.Router();
var URL = require('url');
var User = require('../../modal/user')
var {insertProjectsData, findProjectsData, removeProjectsData} = require('../../db/dbHandler')
const tableName = 'projects';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('projects', { title: 'projects' });
});

router.get('/projects', function(req, res, next) {

  var params = URL.parse(req.url, true).query;
  findProjectsData( tableName, params, (data)=>{
    var response = {status:1,data:data};
    res.setHeader("content-type","application/json" )
    res.send(JSON.stringify(response));
  })

});

router.post('/projects', function(req, res, next) {

  var params = req.body;
  console.log('insertProjectsData',req);
  insertProjectsData(tableName, params, (result)=>{
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

router.delete('/projects', function(req, res, next) {
  var params = URL.parse(req.url, true).query;
  removeProjectsData(tableName , params, (result)=>{
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
