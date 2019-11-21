const express = require("express")
const app = express()
const database = require('./model/database')
const bodyParser = require("body-parser")
database.connect()


//rotas
const index = require("./routes/index")
const contatos = require("./routes/contatosRoute")

//bodyParser global
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*")
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.use("/", index)
app.use("/contatos", contatos)

module.exports = app
