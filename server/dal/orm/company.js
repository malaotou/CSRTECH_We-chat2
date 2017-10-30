/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Company', {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true
        },
        avatarsrc: { //頭像
            type: DataTypes.STRING,
            allowNull: true
        },
        isenabled:{
            type:DataTypes.BIGINT,
            allowNull:true,
            defaultValue:sequelize.NOW
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
        tableName: 'td_company',
        freezeTableName: false
    });
};
