const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express()
const port = 3000
const conn = mysql.createConnection({
    host: "mysql",
    user: "tnemeth",
    password: "tom432",
    database: "tnemeth"
})
conn.connect()
app.use(cors())
//app.get('/', (req, res) => res.send('Hello World!'))

app.use('/', express.static('front-end/dist'))

app.use('/elemiinf', express.static('front-end/dist'))

app.use('/infalap', express.static('front-end/dist'))

app.use('/szakm', express.static('front-end/dist'))

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

app.listen(port, () => console.log(`Started on ${port}!`))