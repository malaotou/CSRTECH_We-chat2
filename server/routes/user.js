    var express=require('express'); 
    var apiRoutes = express.Router();
    var app=express();
    var bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({
        extended:false
    }));
    app.use(bodyParser.json());
    var jwt=require('jsonwebtoken');
    console.log('user.js')
    /*得到当前用户参加过的所有活动*/
    app.get('', function (req, res) {
        console.log(req);
        res.send({
            id:1,
            name:'name',
            age:12
        });
    });
    app.post("/login",function(req,res){
       
        // 验证用户身份是否合法
        // 合法，则颁发Token，并返回给客户端。
        
        // 测试则不做任何验证，直接颁发Token
        console.log(req.body.name);
        var token=jwt.sign({userid:'laoma'},'password',{ expiresIn: '1d' });
        res.header("Access-Control-Allow-Headers", "Content-Type, authorization")
        console.log(token);
        res.send({token});
    })
    app.post('/register',function(req,res){
        // 登记信息至数据库
        console.log(req.body);
        res.send('1234');
    })
 
module.exports=app;