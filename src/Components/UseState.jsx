import React, { useState } from 'react'

export default function UseState() {

    const [value, setvalue] = useState(0)
    return (
        <div>
            <h1>UseSate Hook </h1>
            <h4>
                {value}
            </h4>
            <button onClick={(e) => {
                setvalue((prev) => {
                    return prev + 1;
                })
            }}>+Plus</button>

            <button onClick={(e) => {
                setvalue((prev) => {
                    return prev - 1;
                })
            }}>-Minus</button>
        </div>
    )
}
