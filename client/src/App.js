import { useState } from 'react'
import Axios from 'axios'

// const dotenv = require('dotenv')
// dotenv.config()

function App() {
  const [id, setId] = useState('')
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')
  const axiosIns = Axios.create({ baseURL: 'http://localhost:8080' })
  console.log(process.env.API_URL)
  // process.env.API_URL
  const handleSubmit = (e) => {
    e.preventDefault()
    const date = new Date().getTime().toString()
    setId(date)

    axiosIns
      .post('/addpost', {
        id: date,
        email: email,
        comment: comment,
      })
      .then((res) => console.log(res.data))
  }
  //   Axios.post('http://localhost:8080/addpost', {
  //     id: date,
  //     email: email,
  //     comment: comment,
  //   }).then((res) => console.log(res.data))
  //  }

  const handleChange = (e) => {
    if (e.target.id === 'floatingInput') {
      setEmail(e.target.value)
    }
    if (e.target.id === 'floatingTextarea') {
      setComment(e.target.value)
    }
  }

  return (
    <div className="container border rounded mt-5 p-3">
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={handleChange}
          ></input>
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            onChange={handleChange}
            // style="height: 100px"
          ></textarea>
          <label htmlFor="floatingTextarea">Comments</label>
        </div>
        <button type="submit" className="btn btn-primary hover">
          Submit
        </button>
      </form>
    </div>
  )
}

export default App
