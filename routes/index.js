const express = require('express')
const router = express.Router()

const todoRouter = require('./todo')

router.get('/', (req,res)=> {
    res.json ({
        message: "welcome to my web"
    })
})

router.use('/todo',todoRouter)

module.exports = router