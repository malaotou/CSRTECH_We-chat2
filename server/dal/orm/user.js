/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('User', {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        account: { // 賬號
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{ // 密碼
            type:DataTypes.STRING,
            allowNull:false
        },
        avatarsrc: { //頭像
            type: DataTypes.STRING,
            allowNull: true
        },
        name: { // 姓名，用於企業用戶認證
            type: DataTypes.STRING,
            allowNull: true
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
        tableName: 'td_user',
        freezeTableName: false
    });
};
