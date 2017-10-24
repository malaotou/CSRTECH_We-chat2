module.exports=function(app){
    app.all('*', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
        //res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        //res.header("X-Powered-By", ' 3.2.1');
        res.header("Content-Type", "application/json;charset=utf-8");
        next();
    });
     //用户模块
     console.log('enter router');
     app.use("/api/user", require("./user.js"));
     //注册
     //app.use("/signup", require('./signup'));
     //获取token
     //app.use('/authorize', require('./authorize'));
 
}