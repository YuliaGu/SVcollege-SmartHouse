import React, { createContext, useContext, useState } from 'react'
import { roomsListContext } from '../App'
import Kitchen from './Kitchen'
import Bedroom from './Bedroom'
import Bathroom from './Bathroom'
import Airconditioner from '../Components/Airconditioner'
import Boiler from '../Components/Boiler'
import Lamp from '../Components/Lamp'
import Stereo from '../Components/Stereo'
import { useNavigate } from 'react-router-dom'

// export const roomContext = createContext()

export default function Room({type, name, color}){
    // const {roomsList, setRoomsList} = useContext(roomsListContext)

    const [appliancesList, setAppliancesList] = useState([{
        roomName: "", 
        appliance: ""
    }])

    const navigate = useNavigate()

    // const []

    function addAppliance(roomName){
        const roomInfoDiv = document.getElementById('roomInfo')
        const selectAppliance = document.createElement('select')
        const placeholder = document.createElement('option')
        const airconditioner = document.createElement('option')
        const boiler = document.createElement('option')
        const lamp = document.createElement('option')
        const stereo = document.createElement('option')
        const add = document.createElement('button')
        const br = document.createElement('br')

        placeholder.value = 'Choose appliance'
        placeholder.innerHTML = 'Choose appliance'
        airconditioner.value = 'airconditioner'
        airconditioner.innerHTML = 'airconditioner'
        boiler.value = 'boiler'
        boiler.innerHTML = 'boiler'
        lamp.value = 'lamp'
        lamp.innerHTML = 'lamp'
        stereo.value = 'stereo'
        stereo.innerHTML = 'stereo'
        add.innerHTML = 'Add'

        add.addEventListener('click', () => {
            if(appliancesList[0].roomName == ""){
                setAppliancesList([{
                    roomName: roomName,
                    appliance: selectAppliance?.value
                }])
            }
            else{
                setAppliancesList([
                    ...appliancesList,
                {
                    roomName: roomName,
                    appliance: selectAppliance?.value
                }])
            }

            add.parentNode.removeChild(add)
            br.parentNode.removeChild(br)
            selectAppliance.parentNode.removeChild(selectAppliance)
            displayAppliance()
        })

        for(let i = 0; i < appliancesList?.length; i++){
            if(appliancesList[i] == 'stereo')
                stereo.disabled = true
            if(roomName != 'bathroom')
                boiler.disabled = true
            if(appliancesList?.length == 5){
                airconditioner.disabled = true
                boiler.disabled = true
                lamp.disabled = true
                stereo.disabled = true
            }
        } 

        roomInfoDiv?.append(selectAppliance)
        selectAppliance?.append(placeholder, airconditioner, boiler, lamp, stereo)
        roomInfoDiv?.append(br)
        roomInfoDiv?.append(br)
        roomInfoDiv?.append(add)
    }

    function displayAppliance(){
        appliancesList?.map((e) => {
            if(e.appliance == 'airconditioner'){
                console.log('hey');
                return <Airconditioner/>
            }
            else if(e.appliance == 'boiler'){
                return <Boiler/>
            }
            else if(e.appliance == 'lamp'){
                return <Lamp/>
            }
            else if(e.appliance == 'stereo'){
                return <Stereo/>
            }
        })
    }
    
    function moveToRoom(type, name){
        if(type == 'kitchen'){
            console.log('hhhh');
            navigate('/kitchen' + name)}
        else if(type == 'bedroom')
            navigate('/bedroom' + name)
        else if(type == 'bathroom')
            navigate('/bathroom' + name)
    }
            
            
            
            // return(
            //     <div>
            //       <h3>Smart House</h3>
            //       <p>Room name: {name}</p>
            //       <p>Room type: {type}</p>
            //       <button onClick={() => addAppliance(name)}>Add appliance</button>
            //       <br />
            //       <br />
            //     </div>
            // )



    return(
        <div id='rooms'>
            <div id='homePageRoomDiv' 
                style={{border: '1px solid black', backgroundColor: color}}
                onClick={() => {moveToRoom(type, name)}}>
                <p>Room name: {name}</p>
                {/* <p>Room type: {type}</p>
                <button onClick={() => addAppliance(name)}>Add appliance</button> */}
            </div>
            {/* <div id='roomDiv'
                style={{border: '1px solid black', visibility: 'hidden'}}>
                <h3>Smart House</h3>
                <p>Room name: {name}</p>
                <p>Room type: {type}</p>
                <button onClick={() => addAppliance(name)}>Add appliance</button>
            </div> */}
        </div>
        
  )
}
