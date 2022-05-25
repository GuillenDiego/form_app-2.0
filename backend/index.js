const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

app.use(cors())
app.use(express.json())

// Create connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
})

// Connect
db.connect((err) => {
  if (err) {
    throw err
  }
  console.log('MySql Connected...')
})

app.post('/addpost', (req, res) => {
  const id = req.body.id
  const email = req.body.email
  const comment = req.body.comment
  let post = { id: id, title: email, body: comment }
  let sql = 'INSERT INTO posts SET ?'
  db.query(sql, post, (err, result) => {
    if (err) {
      console.log(err)
      console.log('Error en backend')
      res.send(err)
    } else {
      res.send('Values Inserted')
    }
  })
})

app.listen(8080, () => {
  console.log('Server is listening on port 8080....')
})
