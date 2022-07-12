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
    <div className="container border rounded my-5 p-3">
      <form onSubmit={handleSubmit}>
        <div className="row g-3 my-5 p-3">
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

          <div className="mb-3 col-6">
            <label htmlFor="nacimiento">Nacimiento</label>
            <input
              type="date"
              format="dd/mm/yyyy"
              className="form-control"
              id="nacimiento"
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-3 col-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-3 col-3">
            <label htmlFor="cel">Celular</label>
            <input
              type="Last name"
              className="form-control"
              id="cel"
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-3 col-12">
            <label htmlFor="direccion_completa">Dirrección completa</label>
            <input
              type="Last name"
              className="form-control"
              id="direccion_completa"
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="direccion">Dirección</label>
            <input
              type="Last name"
              className="form-control"
              id="direccion"
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-3 col-3">
            <label htmlFor="colonia">Colonia </label>
            <input
              type="Last name"
              className="form-control"
              id="colonia"
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-3 col-1">
            <label htmlFor="zona">Zona</label>
            <select
              className="form-select"
              aria-label="Default select example"
              id="zona"
              onChange={handleChange}
            >
              <option selected>Zona...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
            </select>
          </div>
          <div className="mb-3 col-2">
            <label htmlFor="city">Ciudad</label>
            <input
              type="Last name"
              className="form-control"
              id="city"
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-3 col-4">
            <label htmlFor="departamento">Departamento</label>
            <input
              type="Last name"
              className="form-control"
              id="departamento"
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-3 col-4">
            <label htmlFor="pais">País</label>
            <input
              type="country"
              className="form-control"
              id="pais"
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <div className="row g-3 my-5 p-3">
          <div className=" mb-3 col-3">
            <label htmlFor="fecha_conversion">Fecha de conversión</label>
            <input
              type="date"
              className="form-control"
              id="fecha_conversion"
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-3 col-3">
            <label htmlFor="fecha_inicio_asistencia">
              Fecha de inicio de asistencia
            </label>
            <input
              type="date"
              className="form-control"
              id="fecha_inicio_asistencia"
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-3 col-4">
            <label htmlFor="sede">Sede</label>
            <input
              type="Last name"
              className="form-control"
              id="sede"
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-3 col-1">
            <label htmlFor="area">Area</label>
            <input
              type="Last name"
              className="form-control"
              id="area"
              onChange={handleChange}
            ></input>
          </div>
          <div className="  col-1">
            <label htmlFor="area">Distrito</label>
            <div className="form-check">
              <label className="form-check-label" htmlFor="distrito">
                1
              </label>
              <input
                type="radio"
                className="form-check-input"
                name="distrito"
                id="distrito"
                value="1"
                onChange={handleChange}
              ></input>
            </div>
            <div className="form-check">
              <label className="form-check-label" htmlFor="distrito">
                2
              </label>
              <input
                type="radio"
                className="form-check-input"
                name="distrito"
                id="distrito"
                value="2"
                onChange={handleChange}
              ></input>
            </div>
            <div className="form-check">
              <label className="form-check-label" htmlFor="distrito">
                3
              </label>
              <input
                type="radio"
                className="form-check-input"
                name="distrito"
                id="distrito"
                value="3"
                onChange={handleChange}
              ></input>
            </div>
            <div className="form-check">
              <label className="form-check-label" htmlFor="distrito">
                4
              </label>
              <input
                type="radio"
                className="form-check-input"
                name="distrito"
                id="distrito"
                value="4"
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="row  align-items-center">
            <div className=" col-1"></div>
            <div className="  form-check col-2">
              <label className="form-check-label" htmlFor="bautizado">
                Bautizado
              </label>
              <input
                type="checkbox"
                className="form-check-input"
                id="bautizado"
                value="1"
                onChange={handleChange}
              ></input>
            </div>
            <div className="   col-3">
              <label htmlFor="fecha_bautismo">Fecha de bautismo</label>
              <input
                type="date"
                className="form-control"
                id="fecha_bautismo"
                onChange={handleChange}
              ></input>
            </div>
          </div>
        </div>
        <div className="row g-3 my-5 p-3">
          <div className="mb-3 col-2">
            <label htmlFor=" estado_civil">Estado civil</label>
            <select
              className="form-select"
              aria-label="Default select example"
              id=" estado_civil"
              onChange={handleChange}
            >
              <option selected>Estado civil...</option>
              <option value="Soltero">Soltero</option>
              <option value="Casado">Casado</option>
              <option value="Divorciado">Divorciado</option>
              <option value="Unido">Unido</option>
            </select>
          </div>
          <div className="mb-3 col-9"></div>
          <div className="mb-3 col-3">
            <label htmlFor=" conyuge_nombre_primero">Nombres de conyuge</label>
            <input
              type="Last name"
              className="form-control"
              id=" conyuge_nombre_primero"
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-3 col-3">
            <label htmlFor=" conyuge_nombre_segundo"></label>
            <input
              type="Last name"
              className="form-control"
              id=" conyuge_nombre_segundo"
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-3 col-3">
            <label htmlFor="conyuge_apellido_primero">
              Apellidos de conyuge
            </label>
            <input
              type="Last name"
              className="form-control"
              id="conyuge_apellido_primero"
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-3 col-3">
            <label htmlFor="conyuge_apellido_segundo"></label>
            <input
              type="Last name"
              className="form-control"
              id="conyuge_apellido_segundo"
              onChange={handleChange}
            ></input>
          </div>

          <div div className=" row  align-items-center">
            <div className="col-1"></div>
            <div className="col-2 form-check ">
              <label className="form-check-label" htmlFor="hijos">
                Hijos
              </label>
              <input
                type="checkbox"
                className="form-check-input"
                id="hijos"
                value="1"
                onChange={handleChange}
              ></input>
            </div>
            <div className="col-9">
              <label htmlFor="edad_hijos">Edad y nombres de hijos</label>
              <input
                type="Last name"
                className="form-control"
                id="edad_hijos"
                onChange={handleChange}
              ></input>
            </div>
          </div>

          <div className="mb-3 col-12">
            <label htmlFor="trabajo">Trabajo</label>
            <input
              type="Last name"
              className="form-control"
              id="trabajo"
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-3 col-10"></div>
        </div>
        <div class="row  my-3 justify-content-evenly">
          <div class="d-grid  col-3  ">
            <button class="btn btn-primary hover" type="submit">
              Submit
            </button>
          </div>
          <div class="d-grid col-3 ">
            <button class="btn btn-primary hover" onClick={handleClick}>
              backend
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default App
