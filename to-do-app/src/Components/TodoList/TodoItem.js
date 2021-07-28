import React, {useState} from 'react'

function TodoItem(props) {

    const [status, setStatus] = useState(props.status)

    const statusChangeHandles = () => {
        if (status) {
            setStatus(false)
        }
        else {setStatus(true)}
        
    }
    if (status) {
        return (
            <div>
                <li className="red">{props.name}</li>
                <button onClick={statusChangeHandles}>Check</button>
            </div> 
        )
    }
    return (
        <div>
            <li>{props.name}</li>
            <button onClick={statusChangeHandles}>Check</button>
        </div> 
    )




    // if (props.status) {
    //     return (
    //         <div>
    //             <li> {props.name} </li>
    //             <button onClick={changeStatus}>Check</button>
    //         </div>
    // )}
    // return (<div>
    //     <li className="red">  {props.name} </li>
    //     <button onClick={changeStatus}>Check</button>
    // </div>)
}


export default TodoItem;
