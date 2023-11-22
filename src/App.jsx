import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState(0)

  const clik = () => {
      setName(name+1)
  }
  return(
    <>
      <h1>{name}</h1>
      <button onClick={clik}> tugma</button>
    </>
  )
}

export default App
