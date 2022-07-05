import { useState } from 'react'
import Axios from 'axios'

const infoPersonas = {
  id_prefix: '',
  nombre_primero: '',
  nombre_segundo: '',
  apellido_primero: '',
  apellido_segundo: '',
  apellido_casada: '',
  nacimiento: '',
  estado_civil: '',
  conyuge_nombre_primero: '',
  conyuge_nombre_segundo: '',
  conyuge_apellido_primero: '',
  conyuge_apellido_segundo: '',
  direccion_completa: '',
  direccion: '',
  colonia: '',
  zona: '',
  city: '',
  departamento: '',
  pais: '',
  email: '',
  cel: '',
  fecha_conversion: '',
  bautizado: '',
  fecha_bautismo: '',
  fecha_inicio_asistencia: '',
  sede: '',
  area: '',
  distrito: '',
  trabajo: '',
  hijos: '',
  edad_hijos: '',
}

function App() {
  const [asistente, setAsistente] = useState(infoPersonas)

  const axiosIns = Axios.create({ baseURL: process.env.REACT_APP_API_URL })
  // process.env.API_URL
  const handleClick = (e) => {
    e.preventDefault()
    axiosIns
      .post('/api/addpostmock', {
        msg: 'Message from client...',
      })
      .then((res) => console.log(res.data))
  }
  // process.env.API_URL
  const handleSubmit = (e) => {
    e.preventDefault()
    const date = new Date().getTime().toString()
    setAsistente({ ...asistente, id_prefix: date })

    axiosIns.post('/api/addpost', {}).then((res) => console.log(res.data))
  }

  const handleChange = (e) => {
    const name = e.target.id
    const value = e.target.value
    setAsistente({ ...asistente, [name]: value })
    console.log(asistente)
  }

  return (
    <div className="container border rounded mt-5 p-3">
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-2">
            <label htmlFor="nombre_primero">Nombres</label>
            <input
              type="First name"
              className="form-control"
              id="nombre_primero"
              onChange={handleChange}
            ></input>
          </div>
          <div className="col-2">
            <label htmlFor="nombre_segundo"></label>
            <input
              type="Second name"
              className="form-control"
              id="nombre_segundo"
              onChange={handleChange}
            ></input>
          </div>
          {/* <div className="col-1"></div> */}
          <div className="col-2">
            <label htmlFor="apellido_primero">Apellidos</label>
            <input
              type="Last Name"
              className="form-control"
              id="apellido_primero"
              onChange={handleChange}
            ></input>
          </div>
          <div className="col-2">
            <label htmlFor="apellido_segundo"></label>
            <input
              type="Last name"
              className="form-control"
              id="apellido_segundo"
              onChange={handleChange}
            ></input>
          </div>
          {/* <div className="col-1"></div> */}
          <div className=" col-3">
            <label></label>
            <div className="input-group mb-3">
              <span className="input-group-text" id="de-addon">
                de
              </span>
              <input
                type="text"
                className="form-control"
                id="apellido_casada"
                aria-label="Ramirez"
                aria-describedby="de-addon"
                onChange={handleChange}
              ></input>
            </div>
          </div>
        </div>

        <div className="col-2">
          Nacimiento<label htmlFor="nacimiento"></label>
          <input
            type="Last name"
            className="form-control"
            id="nacimiento"
            onChange={handleChange}
          ></input>
        </div>
        <div className="col-2">
          Estado civil<label htmlFor=" estado_civil"></label>
          <input
            type="Last name"
            className="form-control"
            id=" estado_civil"
            onChange={handleChange}
          ></input>
        </div>
        <div className="col-2">
          Nombres de conyuge<label htmlFor=" conyuge_nombre_primero"></label>
          <input
            type="Last name"
            className="form-control"
            id=" conyuge_nombre_primero"
            onChange={handleChange}
          ></input>
        </div>
        <div className="col-2">
          <label htmlFor=" conyuge_nombre_segundo"></label>
          <input
            type="Last name"
            className="form-control"
            id=" conyuge_nombre_segundo"
            onChange={handleChange}
          ></input>
        </div>
        <div className="col-2">
          Apellidos de conyuge<label htmlFor="conyuge_apellido_primero"></label>
          <input
            type="Last name"
            className="form-control"
            id="conyuge_apellido_primero"
            onChange={handleChange}
          ></input>
        </div>
        <div className="col-2">
          <label htmlFor="conyuge_apellido_segundo"></label>
          <input
            type="Last name"
            className="form-control"
            id="conyuge_apellido_segundo"
            onChange={handleChange}
          ></input>
        </div>
        <div className="col-2">
          Direccion completa<label htmlFor="direccion_completa"></label>
          <input
            type="Last name"
            className="form-control"
            id="direccion_completa"
            onChange={handleChange}
          ></input>
        </div>
        <div className="col-2">
          Direccion<label htmlFor="direccion"></label>
          <input
            type="Last name"
            className="form-control"
            id="direccion"
            onChange={handleChange}
          ></input>
        </div>
        <div className="col-2">
          Colonia<label htmlFor="colonia"></label>
          <input
            type="Last name"
            className="form-control"
            id="colonia"
            onChange={handleChange}
          ></input>
        </div>
        <div className="col-2">
          Zona<label htmlFor="zona"></label>
          <input
            type="Last name"
            className="form-control"
            id="zona"
            onChange={handleChange}
          ></input>
        </div>
        <div className="col-2">
          Ciudad<label htmlFor="city"></label>
          <input
            type="Last name"
            className="form-control"
            id="city"
            onChange={handleChange}
          ></input>
        </div>
        <div className="col-2">
          departamento<label htmlFor="departamento"></label>
          <input
            type="Last name"
            className="form-control"
            id="departamento"
            onChange={handleChange}
          ></input>
        </div>
        <div className="col-2">
          País<label htmlFor="pais"></label>
          <input
            type="Last name"
            className="form-control"
            id="pais"
            onChange={handleChange}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="email">Correo</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="correo"
            onChange={handleChange}
          ></input>
        </div>
        <div className="col-2">
          Celular<label htmlFor="cel"></label>
          <input
            type="Last name"
            className="form-control"
            id="cel"
            onChange={handleChange}
          ></input>
        </div>
        <div className="col-2">
          Fecha de conversión<label htmlFor="fecha_conversion"></label>
          <input
            type="Last name"
            className="form-control"
            id="fecha_conversion"
            onChange={handleChange}
          ></input>
        </div>
        <div className="col-2">
          Bautizado<label htmlFor="bautizado"></label>
          <input
            type="Last name"
            className="form-control"
            id="bautizado"
            onChange={handleChange}
          ></input>
        </div>
        <div className="col-2">
          Fecha de bautismo<label htmlFor="fecha_bautismo"></label>
          <input
            type="Last name"
            className="form-control"
            id="fecha_bautismo"
            onChange={handleChange}
          ></input>
        </div>
        <div className="col-2">
          Fecha inicio asistencia
          <label htmlFor="fecha_inicio_asistencia"></label>
          <input
            type="Last name"
            className="form-control"
            id="fecha_inicio_asistencia"
            onChange={handleChange}
          ></input>
        </div>
        <div className="col-2">
          Sede<label htmlFor="sede"></label>
          <input
            type="Last name"
            className="form-control"
            id="sede"
            onChange={handleChange}
          ></input>
        </div>
        <div className="col-2">
          Area<label htmlFor="area"></label>
          <input
            type="Last name"
            className="form-control"
            id="area"
            onChange={handleChange}
          ></input>
        </div>
        <div className="col-2">
          Distrito<label htmlFor="distrito"></label>
          <input
            type="Last name"
            className="form-control"
            id="distrito"
            onChange={handleChange}
          ></input>
        </div>
        <div className="col-2">
          Trabajo<label htmlFor="trabajo"></label>
          <input
            type="Last name"
            className="form-control"
            id="trabajo"
            onChange={handleChange}
          ></input>
        </div>
        <div className="col-2">
          Tiene hijos<label htmlFor="hijos"></label>
          <input
            type="Last name"
            className="form-control"
            id="hijos"
            onChange={handleChange}
          ></input>
        </div>
        <div className="col-2">
          Edad y nombres de hijos<label htmlFor="edad_hijos"></label>
          <input
            type="Last name"
            className="form-control"
            id="edad_hijos"
            onChange={handleChange}
          ></input>
        </div>

        <button type="submit" className="btn btn-primary hover m-3">
          Submit
        </button>
        <button onClick={handleClick} className="btn btn-primary hover">
          backend
        </button>
      </form>
    </div>
  )
}

export default App
