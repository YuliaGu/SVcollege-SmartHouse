import React from 'react'

export default function Lamp() {
    const [state, setState] = useState('red')

    function activate(){
        if(state == 'red')
            setState('green')
        else if(state == 'green')
            setState('red')
    }

    return (
        <div style={{border: '1px solid black', backgroundColor: state}}>
            <p onClick={activate}>Lamp</p>
        </div>
    )
}
