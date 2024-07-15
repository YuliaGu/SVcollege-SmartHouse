import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { roomsListContext } from '../App'
import Room from '../Views/Room'

export default function HomePage(){
    const navigate = useNavigate()

    const {roomsList, setRoomsList} = useContext(roomsListContext)

    return(
        <div>
            <h2>Smart House</h2>
            <div id='rooms'>
                {roomsList?.map((e) => {return <Room type={e.type} name={e.name} color={e.color}/>} )}
            </div>
            <button onClick={() => {navigate('/addroom')}}>Add room</button>
        </div>
  )
}
