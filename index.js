const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express()
const port = 3000
const conn = mysql.createConnection({
    //host: "mysql",
    host: "localhost",
    user: "tnemeth",
    password: "tom432",
    database: "tnemeth"
})
conn.connect()
app.use(cors())

app.use('/', express.static('front-end/dist'))

app.use(/targy/i, express.static('front-end/dist'))

app.get('/getkurz/:kn', (req,res) => {
    conn.query(`
        SELECT * 
        FROM web_kurzk 
        WHERE kl = '${req.params.kn}'
    `,  (err,rows) => {
            res.send({ param: req.params.kn, err,rows })
        } 
    ) 
})

app.get('/getallkurz', (req,res) => {
    conn.query(`
        SELECT kl, kurzuscim 
        FROM web_kurzk 
        ORDER BY kurzuscim
    `,  (err,rows) => {
            res.send({ err, rows })
        } 
    ) 
})

app.listen(port, () => console.log(`Started on ${port}!`))