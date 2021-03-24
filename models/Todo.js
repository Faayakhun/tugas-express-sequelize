const { Sequelize,DataTypes } = require('sequelize')
const sequelize = require('../config/db')

const Todo = sequelize.define('todo', {
    name: {
        type: DataTypes.STRING,
    },
}, {
    underscored: true,
    timestamps: false,
})

const User = sequelize.define('user', {
    username: {
        type: DataTypes.STRING
    }
},  {
    underscored: true,
    timestamps: false,
})

User.hasMany(Todo,{ foreignKey: 'user_id' })
Todo.belongsTo(User,{ foreignKey: 'user_id' })

module.exports = {Todo,User}