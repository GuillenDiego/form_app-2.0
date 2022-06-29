const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const dotenv = require('dotenv')
var zeropad = require('zeropad')

dotenv.config()

const port = process.env.PORT || 5000
app.use(cors())
app.use(express.json())

// Count of id per day

const id_count = { d1: 0, d2: 0, d4: 0, d6: 0 }

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
    console.log(err)
    console.log('Error in db connection...')
  } else {
    console.log('MySql Connected...')
  }
})

app.post('/api/addpost', (req, res) => {
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

app.post('/api/addpostmock', (req, res) => {
  const msg = req.body.msg
  const id_prefix = '1'

  id_count.d1 = id_count.d1 + 1
  const id = id_prefix + zeropad(id_count.d1, 4)

  const nombre_primero = 'Ramona'
  const nombre_segundo = 'Josefina'
  const apellido_primero = 'Gonzales'
  const apeliddo_segundo = 'Figueroa'
  const apellido_casada = 'Perez'
  const correo = 'ramondeaperez@gmail.com'
  const telefono = '47707544'
  const direccion_completa = '5 ave final, colinas de minerva Z8. Mixco'
  const direccion = '5 calle'
  const zona = '8'
  const colonia = 'Colinas de minerva'
  const ciudad = 'Mixco'
  const departamento = 'Guatemala'
  const pais = 'Guatemala'
  const nacimiento = '1995-12-03'
  const estado_civil = 'casado'
  const sede = 'Sede'
  const area = '3'
  const distrito = '23'
  const conversion = '2005-11-15'
  const bautizado = 'true'
  const bautismo = '2006-08-23'
  const trabajo = 'Pollo Campero'
  const hijos = 'true'
  const edades_hijos = 'Edgar 8, Maria 12'

  console.log(msg)
  console.log(id)
  res.send('MSG from backend')
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}....`)
})
