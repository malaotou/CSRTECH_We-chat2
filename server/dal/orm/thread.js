/* jshint indent: 2 */
var productgroup=require('./productgroup')
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Room', {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: { // 组名
            type: DataTypes.STRING,
            allowNull: false
        },
        groupid:{ // 密碼
            type:DataTypes.BIGINT,
            allowNull:false
            //,
            // references:{
            //     model:productgroup,
            //     key:'id'
            // }
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
        tableName: 'td_thread',
        freezeTableName: false
    });
};
