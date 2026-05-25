import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  const [message, setMessage] = useState("Loading...")

  const API = import.meta.env.VITE_API_URL

  useEffect(() => {
    axios.get(API)
      .then((response) => {
        setMessage(response.data.message)
      })
      .catch((error) => {
        console.log(error)
        setMessage("Error connecting backend")
      })
  }, [])

  return (
    <div>
      <h1>{message}</h1>
    </div>
  )
}

export default App