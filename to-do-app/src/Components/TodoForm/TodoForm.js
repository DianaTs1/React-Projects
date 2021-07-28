import React, {useState} from 'react'

function TodoForm(props) {
    const [item, setItem] = useState("")

    const inputHandler = (event) => {
        // console.log(event.target.value)
       setItem(event.target.value)
    }

    const formSubmitHandler = (event) => {
        event.preventDefault()
        props.onSubmitListHandler(item)
    }

    return (
        <div>
            <form onSubmit={formSubmitHandler}>
                <input type="text" onChange={inputHandler}/>
                <button type="submit">Submit</button>
            </form>
            
        </div>
    )
}

export default TodoForm
