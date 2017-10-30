/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Demo', {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.BIGINT,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        creator: {
            type: DataTypes.BIGINT,
            allowNull: true
        },
        created_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        modified_by: {
            type: DataTypes.BIGINT,
            allowNull: true
        },
        modified_date: {
            type: DataTypes.DATE,
            allowNull: true
        }

    }, {
        tableName: 't_demo',
        freezeTableName: false
    });
};
