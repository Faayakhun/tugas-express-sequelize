const express = require('express')
const app = express()
const cors = require('cors')
const sequelize = require ('./config/db')
const routes = require('./routes')


const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(routes)

async function testConnection () {
    try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    await sequelize.sync({alter: true})
    console.log("All models were synchronized successfully")
    } catch (error) {
    console.error('Unable to connect to the database:', error);
    }
}

testConnection()

app.listen(PORT, ()=> {
    console.log("server running")
})