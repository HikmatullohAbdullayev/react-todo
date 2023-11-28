import { useState } from 'react'
import './App.css'
import "./test.css"
import { Button } from '@mui/material'
// import { ComponentMeta } from '@storybook/react';

function App() {
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
   
    setData((eskiQiymat)=>{
      return eskiQiymat.filter((item2)=>{
        return item2.id !== id
      })
    })
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
            <Button variant='contained' className="button"  onClick={ ()=> del(item.id)} >delete</Button>
          </ul>
        )
      })}
    </>
  )
}

export default App



