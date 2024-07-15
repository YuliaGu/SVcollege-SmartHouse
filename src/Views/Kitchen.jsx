import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Kitchen({name, color, addAppliance}){

  return(
    <div style={{border: '1px solid black', backgroundColor: color}}>
      <h3>Smart House</h3>
      <p>Room name: {name}</p>
      <p>Room type: Kitchen</p>
      <button onClick={() => addAppliance(name)}>Add appliance</button>
      <br />
      <br />
    </div>)




  // const navigate = useNavigate()

  // return (
  //   <div style={{border: '1px solid black', backgroundColor: color}}>
  //     <p onClick={navigate('/kitchen' + name)}>{name}</p>
  //   </div>
  // )
}
