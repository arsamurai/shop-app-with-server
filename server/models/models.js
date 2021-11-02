const sequelize = require('./../db')
const DataTypes = require('sequelize')

const Goods = sequelize.define('goods', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    imageUrl: {type: DataTypes.STRING, unique: true, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    sizes: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    sewing: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    category: {type: DataTypes.INTEGER, allowNull: false},
    discount: {type: DataTypes.INTEGER},
    rating: {type: DataTypes.INTEGER, defaultValue: 1},
})

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "User"},
})

module.exports = {
    Goods, User
}