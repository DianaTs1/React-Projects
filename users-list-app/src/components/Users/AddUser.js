import { useState } from "react"
import Button from "../UI/Button"
import Card from "../UI/Card"
import ErrorOverlay from "../UI/ErrorOverlay"
import styles from "./AddUser.module.css"

const AddUser = props => {
    const [username, setUsername]= useState("")
    const [userAge, setUserAge]= useState("")
    const [error, setError] = useState(false)
    const [errorText, setErrorText] = useState()
    

    const changeUsername = (event) => {
        setUsername(event.target.value)
    }
    const changeUserAge = (event) => {
        setUserAge(event.target.value)
    }

    const cancelErrorHandler = (event) =>{
        setError(false)
    }

    const addUserHandler = (event) => {
        event.preventDefault()
        if (username.trim().length === 0 || userAge.trim().length === 0) {
            setError(true)
            setErrorText({
                title: "Invalid Name",
                message: "Please type at least one character name"
            })
            return
        }
        if (+userAge < 1) {
            setError(true)
            setErrorText({
                title: "Invalid Age",
                message: "Please type age greater than or equal to 1"
            })
            return
        }
        props.onAddUser(username, userAge)
        setUserAge("")
        setUsername("")
    }



    return (
        <div>
            {error && <ErrorOverlay  onConfirm={cancelErrorHandler} title={errorText.title} message={errorText.message}/>}
            <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" onChange={changeUsername} value={username}/>
                <label htmlFor="userAge">User Age</label>
                <input id="userAge" type="number" onChange={changeUserAge} value={userAge}/>
                <Button type="submit" name="Add User"/>
            </form>
        </Card>
        </div>
    )
}

export default AddUser;