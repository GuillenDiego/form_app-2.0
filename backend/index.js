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

    const id_prefix = '1'
    id_count.d1 = id_count.d1 + 1

    const id_asistentes = id_prefix + zeropad(id_count.d1, 4)

    const nombre_primero = req.body.comment
    const nombre_segundo = req.body.nombre_segundo
    const apellido_primero = 'Gonzales'
    const apellido_segundo = req.body.apellido_segundo
    const apellido_casada = req.body.apellido_casada
    const nacimiento = '1995-12-03'
    const estado_civil = req.body.estado_civil
    const conyuge_nombre_primero = req.body.conyuge_nombre_primero
    const conyuge_nombre_segundo = req.body.conyuge_nombre_segundo
    const conyuge_apellido_primero = req.body.conyuge_apellido_primero
    const conyuge_apellido_segundo = req.body.conyuge_apellido_segundo
    const direccion_completa = req.body.direccion_completa
    const direccion = req.body.direccion
    const colonia = req.body.colonia
    const zona = req.body.zona
    const ciudad = req.body.ciudad
    const departamento = req.body.departamento
    const pais = req.body.pais
    const email = req.body.email
    const cel = req.body.cel
    const fecha_conversion = req.body.fecha_conversion
    const bautizado = req.body.bautizado
    const fecha_bautismo = req.body.fecha_bautismo
    const fecha_inicio_asistencia = req.body.fecha_inicio_asistencia
    const sede = req.body.sede
    const area = req.body.area
    const distrito = req.body.distrito
    const trabajo = req.body.trabajo
    const hijos = req.body.hijos
    const edad_hijos = req.body.edad_hijos


    // const nombre_primero = req.body.comment
    // const nombre_segundo = 'Josefina'
    // const apellido_primero = 'Gonzales'
    // const apellido_segundo = req.body.apellido_segundo
    // const apellido_casada = 'Perez'
    // const nacimiento = '1995-12-03'
    // const estado_civil = 'casado'
    // const conyuge_nombre_primero = 'Juan'
    // const conyuge_nombre_segundo = 'Carlos'
    // const conyuge_apellido_primero = 'Perez'
    // const conyuge_apellido_segundo = 'Martinez'
    // const email = req.body.email
    // const cel = '47707544'
    // const direccion_completa = '5 ave final, colinas de minerva Z8. Mixco'
    // const direccion = '5 calle'
    // const zona = '8'
    // const colonia = 'Colinas de minerva'
    // const ciudad = 'Mixco'
    // const departamento = 'Guatemala'
    // const pais = 'Guatemala'
    // const fecha_conversion = '2005-11-15'
    // const bautizado = '0'
    // const fecha_bautismo = '2006-08-23'
    // const fecha_inicio_asistencia = '2005-06-15'
    // const sede = 'Sede'
    // const area = '3'
    // const distrito = '23'
    // const trabajo = 'Pollo Campero'
    // const hijos = '1'
    // const edad_hijos = 'Edgar 8, Maria 12'





    let post = {
        id_asistentes: id_asistentes,
        nombre_primero: nombre_primero,
        nombre_segundo: nombre_segundo,
        apellido_primero: apellido_primero,
        apellido_segundo: apellido_segundo,
        apellido_casada: apellido_casada,
        nacimiento: nacimiento,
        estado_civil: estado_civil,
        conyuge_nombre_primero: conyuge_nombre_primero,
        conyuge_nombre_segundo: conyuge_nombre_segundo,
        conyuge_apellido_primero: conyuge_apellido_primero,
        conyuge_apellido_segundo: conyuge_apellido_segundo,
        direccion_completa: direccion_completa,
        direccion: direccion,
        colonia: colonia,
        zona: zona,
        ciudad: ciudad,
        departamento: departamento,
        pais: pais,
        email: email,
        cel: cel,
        fecha_conversion: fecha_conversion,
        bautizado: bautizado,
        fecha_bautismo: fecha_bautismo,
        trabajo: trabajo,
        fecha_inicio_asistencia: fecha_inicio_asistencia,
        sede: sede,
        area: area,
        distrito: distrito,
        hijos: hijos,
        edad_hijos: edad_hijos,
    }
    let sql = 'INSERT INTO asistentes SET ?'
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

    console.log(msg)
    console.log(id)
    res.send('MSG from backend')
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}....`)
})