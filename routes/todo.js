const express = require('express')
const { getAllTodo,getTodoByID,addNewTodo,deleteTodo,updateTodo } = require('../controller/todo.controller')
const router = express.Router()

router.get('/', getAllTodo)
router.get('/:id', getTodoByID)
router.post('/', addNewTodo)
router.delete('/:id', deleteTodo)
router.put('/:id', updateTodo)

module.exports = router