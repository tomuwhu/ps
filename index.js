const express = require('express')
const app = express()
const port = 3000

app.use(cors())
//app.get('/', (req, res) => res.send('Hello World!'))

app.use('/', express.static('front-end/dist'))

app.listen(port, () => console.log(`Started on ${port}!`))