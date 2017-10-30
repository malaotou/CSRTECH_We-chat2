 var db = require('../dal/orm')
 var md5=require('md5');
// var User=require('../domain/userinfo');
// module.exports=function(userinfo){
//     User.name=userinfo.name;
//     User.password=userinfo.password;
//     db.User.save({
//         name=userinfo.name,
//         password=userinfo.password,
//     });
// } 

// var person = db.Person.build({
//     username: "laotou",
//     user_id: 2,
//     email: "mamou@ma.com",
//     creater: 2,
//     createdAt: "2017-10-27",
//     updatedAt: "2017-10-27"
//   });
//   person.save()
//     .then(function (o) {
//       console.log('保存成功！')
//     });

var userRepo={
    // 创建新用户信息
    addUser:function(user,callback){
        console.log(user);
        db.User.build({
            account:user.account,
            password:md5(user.password),
            avatarsrc:user.avatorsrc
        })
        .save()
        .then(function(user,result){
            console.log('user add sucess');
            callback(reault);
            // 创建图片信息
        })
        .catch(err=>{
            console.log(err);
        });
    },
    // 获取所有或特定用户
    getAllUser:function(user,callback){
        db.User.findAll({})
        .then(users=>{
            callback(users);
        })
    },
    // 获取指定用户信息
    getUserById:function(id,callback){
        db.User.find({
            id=id
        })
        .then(user=>{
            console.log(user);
        })
        .catch(err=>{
            console.log(err);
        })
    },
    login:function(account,password,callback){
          var encryPWS=md5(password);
        db.User.find({
            account=account,
            encryPWS=password
        })
        .then(user=>{
            if(user!=null){
                // 验证通过
                callback(true,null);
            }
            else{
                // 验证不通过
                callback(false,'User not exists')
            }
        })
        .catch(err=>{
            console.log(err);
            callback(false,err);
        })
    }
}
module.exports=userRepo;