const { DataTypes } = require("sequelize");
const sequelize = require("../utils/database");

const CartItem = sequelize.define(
    'CartItem', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
);

module.exports = CartItem;