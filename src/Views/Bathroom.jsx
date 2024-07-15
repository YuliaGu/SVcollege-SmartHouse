import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Bathroom({name, color, addAppliance}){

  return(
    <div style={{border: '1px solid black', backgroundColor: color}}>
      <h3>Smart House</h3>
      <p>Room name: {name}</p>
      <p>Room type: Bathroom</p>
      <button onClick={() => addAppliance(name)}>Add appliance</button>
      <br />
      <br />
    </div>)
  
  // const navigate = useNavigate()

  // return (
  //   <div style={{border: '1px solid black', backgroundColor: color}}>
  //     <p onClick={navigate('/bathroom' + name)}>{name}</p>
  //   </div>
  // )
}
