import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Bedroom({name, color, addAppliance}){

  return(
    <div style={{border: '1px solid black', backgroundColor: color}}>
      <h3>Smart House</h3>
      <p>Room name: {name}</p>
      <p>Room type: Bedroom</p>
      <button onClick={() => addAppliance(name)}>Add appliance</button>
      <br />
      <br />
    </div>)

  // const navigate = useNavigate()

  // return (
  //   <div style={{border: '1px solid black', backgroundColor: color}}>
  //     <p onClick={navigate('/bedroom' + name)}>{name}</p>
  //   </div>
  // )
}
