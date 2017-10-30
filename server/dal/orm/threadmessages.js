/* jshint indent: 2 */
//var room =require('./room');
var user=require('./user');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('RoomMessage', {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        roomid: { // 组名
            type: DataTypes.BIGINT,
            allowNull: false
            // ,
            // references:{
            //     model:room,
            //     key:'id'
            // }
        },
        userid:{ // 密碼
            type:DataTypes.BIGINT,
            allowNull:false
            // ,
            // references:{
            //     model:user,
            //     key:'id'
            // }
        },
        text: { //頭像
            type: DataTypes.STRING,
            allowNull: true
        },
        isenabled: { // 姓名，用於企業用戶認證
            type: DataTypes.BIGINT,
            allowNull: true,
            defaultValue:1
        },
        creator: { //創建人
            type: DataTypes.BIGINT,
            allowNull: true
        },
        created_date: { //創建時間
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue:sequelize.NOW
        },
        modified_by: { //修改人
            type: DataTypes.BIGINT,
            allowNull: true
        },
        modified_date: { //修改時間
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue:sequelize.NOW
        }

    }, {
        tableName: 'td_threadessage',
        freezeTableName: false
    });
};
