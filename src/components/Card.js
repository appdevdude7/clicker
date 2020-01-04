import React from 'react'
import './Card.scss'
import Number from './Number'
import Button from './Button'

const Card = () => {
    return (
        <div className="card">
            <div className="number">
                <Number />
            </div>
            <div className="card-bottom">
                <Button symbol="+" />
                <Button symbol="R"/>
                <Button symbol="-"/>
            </div>
        </div>
    )
}

export default Card
