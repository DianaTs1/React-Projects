import React from 'react'
import Card from '../UI/Card'
import styles from "./UsersList.module.css"


function UsersList(props) {
    return (
      
        <Card className={styles.users}>    
            <ul>
            {props.users.map((user)=> (
                <li key={user.id}> {user.name}, {user.age} <em>years old</em></li>
            ))}
            </ul>
        </Card>
    )
}

export default UsersList
