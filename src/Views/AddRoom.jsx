import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { roomsListContext } from '../App'


export default function AddRoom() {
    const navigate = useNavigate()

    const {roomsList, setRoomsList} = useContext(roomsListContext)

    function roomNameValidation(name){ //doesnt work....................
        // console.log(name);
        if(name > 9){
            return(
                'Name to long'
            )
        }
    }

    function addRoom(type, name, color){
        if(roomsList?.length == 0){
            setRoomsList(
                [{
                    type,
                    name,
                    color
                }])
        }
        else{
            setRoomsList(
                [...roomsList,{
                    type,
                    name,
                    color
                }]
            )
        }
    }

    function approveRoom(){
        let roomType = document.getElementById("roomType")?.value
        let roomName = document.getElementById("roomName")?.value
        let roomColor = document.getElementById("roomColor")?.value

        if(roomName?.length >= 1 && (roomType == 'kitchen' || roomType == 'bedroom' || roomType == 'bathroom')){
            addRoom(roomType, roomName, roomColor)
        }
        else{
            alert('Error')
        }
        navigate('/')
    }

    return (
        <div>
            <h3>Smart House</h3>
            <select name="roomType" id="roomType">
                <option disabled selected>Select room type</option>
                <option value="kitchen">Kitchen</option>
                <option value="bedroom">Bedroom</option>
                <option value="bathroom">Bathroom</option>
            </select>
            <br />
            <input id='roomName' onChange={(e) => {roomNameValidation(e.target.value)}} type="text" placeholder='Enter room name'/>
            <br />
            <input id='roomColor' type="text" placeholder='Enter room color'/>
            <br />
            <button onClick={() => {{approveRoom()}}}>Add</button>
        </div>
    )
}
