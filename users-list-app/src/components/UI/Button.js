import React from 'react'
import styles from "./Button.module.css"

function Buttons(props) {
    return (
        <button 
            type={props.type || "button"} 
            className={styles.button}
            onClick={props.onClick}
        >
            {props.name}</button>
    )
}

export default Buttons
