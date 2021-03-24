const { Sequelize } = require('../config/db')
const Model = require('../models/Todo')
const User = Model.User
const Todo = Model.Todo

module.exports = {
    getAllTodo: async (req,res) => {
        const todo = await User.findAll({include: [{model: Todo,attributes:['name']}]})

        res.json({
            message: 'success get all data',
            data: todo
        })
    },
    getTodoByID: async (req,res)=> {
        const todo = await User.findOne({where: {id: req.params.id}, include: [{model: Todo,attributes:['name']}]})

        res.json({
            message: 'success get all data',
            data: todo
        })
    },
    addNewTodo: async (req,res) => {
        const newTodo = await Todo.create(req.body)

        res.json({
            message: "success post new data",
            data: newTodo
        })
    },
    deleteTodo: async (req,res) => {
        const deletedTodo = await Todo.destroy({where : {id: req.params.id}})

        res.json({
            message: "success delete data",
            data: deletedTodo
        })
    },
    updateTodo: async (req,res) => {
        const editTodo = await Todo.update((req.body) , {where : {id: req.params.id}})

        res.json({
            message: "success edit data",
            data: editTodo
        })
    }
}