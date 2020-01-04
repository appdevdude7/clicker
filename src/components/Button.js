import React from 'react'
import './Button.scss'

const Button = (props) => {
    return (
        <>
            <button onClick={props.handleChange} className={`button ${props.color}`}>{props.symbol}</button>
        </>
    )
}

export default Button
