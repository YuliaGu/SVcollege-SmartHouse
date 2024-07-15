import { createContext, useState } from 'react'
import HomePage from './Views/HomePage'
import AddRoom from './Views/AddRoom'
import Kitchen from './Views/Kitchen'
import Bedroom from './Views/Bedroom'
import Bathroom from './Views/Bathroom'
import Room from './Views/Room'
import './App.css'
import {Routes, Route} from 'react-router-dom'

export const roomsListContext = createContext()

function App(){
  const [roomsList, setRoomsList] = useState([])

  return(
    <roomsListContext.Provider value={{roomsList, setRoomsList}}>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/addroom' element={<AddRoom/>} />
{/* 
        {roomsList.map((e) => {
          if(e.type == 'kitchen')
            return <Route path={'/kitchen' + e.name} element={<Kitchen name={e.name} addAppliance={addAppliance}/>} />
          else if(e.type == 'bedroom')
            return <Route path={'/bedroom' + e.name} element={<Bedroom name={e.name} addAppliance={addAppliance}/>} />
          else if(e.type == 'bathroom')
            return <Route path={'/bathroom' + e.name} element={<Bathroom name={e.name} addAppliance={addAppliance}/>} />
          })} */}
          

          
          {roomsList.map((e)  => {return <Route path={'/' + e.type + e.name} element={<Room type={e.type} name={e.name}/>} />})}




        {/* <Route path='/kitchen' element={<Kitchen/>} />
        <Route path='/bedroom' element={<Bedroom/>} />
        <Route path='/bathroom' element={<Bathroom/>} /> */}
      </Routes>
    </roomsListContext.Provider>
  )
}

export default App
