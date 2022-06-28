import { useState } from 'react'
import Axios from 'axios'

function App() {
  const [id, setId] = useState('')
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')

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
    setId(date)

    axiosIns
      .post('/api/addpost', {
        id: 'date',
        email: email,
        comment: comment,
      })
      .then((res) => console.log(res.data))
  }

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
