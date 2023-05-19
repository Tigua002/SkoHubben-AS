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
const path = require("path")
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + "/code/index.html"))

})

// app.post("/buy/shoe", function(req, res){
//     let antall = req.body.antall
//     let name = req.body.name
//     connection.query(`INSERT INTO orders(shoe_name, order_nr) VALUE(${connection.escape(name)}, ${connection.escape(antall)})`)

// })

app.post("/buy/shoe", function (req, res) {
    connection.query(`SELECT * FROM orders`, function (err, result, fields) {
        var data = JSON.parse(JSON.stringify(result))
        var order_nr = data.length + 1

        let AJ1R = req.body.AJ1R
        let AJ1C = req.body.AJ1C
        let AJDB = req.body.AJDB
        let AJDW = req.body.AJDW
        let JMB = req.body.JMB
        let JMR = req.body.JMR
        let JR6B = req.body.JR6B
        let JR6W = req.body.JR6W
        let NDW = req.body.NDW
        let NDB = req.body.NDB
        let NIB = req.body.NIB
        let NIW = req.body.NIW
        let buyer = req.body.buyer

        connection.query(`INSERT INTO orders(order_nr, AJ1R, AJ1C, AJDB, AJDW, JMB, JMR, JR6B, JR6W, NDW, NDB, NIB, NIW, buyer) VALUE(${connection.escape(order_nr)}, ${connection.escape(AJ1R)}, ${connection.escape(AJ1C)}, ${connection.escape(AJDB)}, ${connection.escape(AJDW)}, ${connection.escape(JMB)}, ${connection.escape(JMR)}, ${connection.escape(JR6B)}, ${connection.escape(JR6W)}, ${connection.escape(NDW)}, ${connection.escape(NDB)}, ${connection.escape(NIB)}, ${connection.escape(NIW)}, ${connection.escape(buyer)})`)
    })
})


app.get("/bought/items", function (req, res) {
    connection.query(`SELECT * FROM orders`, function (err, result, fields) {
        let data = JSON.parse(JSON.stringify(result))
        res.send(data)
    })
})

app.post("/create/user", function (req, res) {
    connection.query(`SELECT * FROM users`, function (err, result, fields) {
        var data = JSON.parse(JSON.stringify(result))
        let username = req.body.user
        let password = req.body.pass
        connection.query(`INSERT INTO users (username, passwor) VALUE(${connection.escape(username)}, ${connection.escape(password)})`)
    })
})
app.get("/get/users", function (req, res) {
    connection.query(`SELECT * FROM users`, function (err, result, fields) {
        let data = JSON.parse(JSON.stringify(result))
        res.send(data)
    })
})

app.post("/delete/user", function (req, res) {
    connection.query(`SELECT * FROM users`, function (err, result, fields) {
        var data = JSON.parse(JSON.stringify(result))
        let nameOfUser = req.body.username
        connection.query(`DELETE FROM users WHERE username=${connection.escape(nameOfUser)};`)
    })
})

app.post("/change/pass", function (req, res) {
    connection.query(`SELECT * FROM users`, function (err, result, fields) {
        var data = JSON.parse(JSON.stringify(result))
        let nameOfUser = req.body.username
        let newPass = req.body.newPass
        connection.query(`UPDATE users SET passwor = ${connection.escape(newPass)} WHERE username = ${connection.escape(nameOfUser)};`)
    })
})

app.post("/change/user", function (req, res) {
    connection.query(`SELECT * FROM users`, function (err, result, fields) {
        var data = JSON.parse(JSON.stringify(result))
        let nameOfUser = req.body.username
        let newUser = req.body.newUser
        connection.query(`UPDATE users SET username = ${connection.escape(newUser)} WHERE username = ${connection.escape(nameOfUser)};`)
        connection.query(`UPDATE orders SET buyer = ${connection.escape(newUser)} WHERE buyer = ${connection.escape(nameOfUser)};`)
    })
})



app.listen(22223)
app.use(express.static("code"))

