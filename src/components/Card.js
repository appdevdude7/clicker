import React, { useState } from 'react'
import './Card.scss'
import Number from './Number'
import Button from './Button'

const Card = () => {
    const [count, setCount] = useState(0)

    return (
        <div className="card">
            <div className="number">
                <Number count={count} />
            </div>
            <div className="card-bottom">
                <Button handleChange={ () => setCount(count+1) } symbol="+" color="green" />
                <Button handleChange={ () => setCount(0) } symbol="R" color="yellow"/>
                <Button handleChange={ () => setCount(count-1) } symbol="-" color="red"/>
            </div>
        </div>
    )
}

export default Card
