import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState(0)
  const [data , setData] = useState([
    {
      id:1,
      nameData:"birinchi",
      email:"hjkjhkj@.com"
    },
    {
      id:2,
      nameData:"ikkinch",
      email:"hjkjhkj@.com"
    },
    {
      id:3,
      nameData:"uchinchi",
      email:"hjkjhkj@.com"
    },
  ])
 
   const del = ( id) =>{
    const filterDel = data.filter((item2)=> {
      return item2.id !== id
    })
    setData(filterDel)
  }
  return(
    <>
      
      {/* <button onClick={list}>data</button> */}
      {data.map((item) => {
        return(
          <ul key={item.id}>
            <li>{item.nameData}</li> 
            <li>{item.id}</li> 
            <li>{item.email}</li> 
            <button onClick={ ()=> del(item.id)} >del</button> 
          </ul>
        )
      })}
    </>
  )
}

export default App



