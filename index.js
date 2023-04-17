const bodyParser = require('body-parser');

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "65.108.15.66",
    user: 'u131_I1Cc22TtMg',
    password: "d3sS3tsJUm=QtEQtz=BMIQVx",
    database: 's131_Epic',
});

connection.connect();

const express = require('express')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
const path = require( "path")
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + "/code/index.html"))

})

app.post("/buy/shoe", function(req, res){
    let antall = req.body.antall
    let name = req.body.name
    connection.query(`INSERT INTO orders(shoe_name, order_nr) VALUE(${connection.escape(name)}, ${connection.escape(antall)})`)
    
})

app.get("/bought/items", function(req, res){
    connection.query(`SELECT * FROM orders`, function(err, result, fields){
        let data = JSON.parse(JSON.stringify(result))
        res.send(data)
    })
})

app.listen(3000)
app.use(express.static("code"))

