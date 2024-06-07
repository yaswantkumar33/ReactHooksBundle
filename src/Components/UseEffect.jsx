import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [Color, Setcolor] = useState("Select Color")
    const [Width, setwidth] = useState(window.innerWidth)
    useEffect(() => {
        console.log("render")
    })
    function handleresize() {
        setwidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener("resize", handleresize)

        return () => {
            // this runs when the component in unmounting
            window.removeEventListener("resize", handleresize)
        }
    })
    return (
        <div>
            <h1>UseEffect</h1>
            <h3>{Color} is clicked !!! </h3>
            <h5>Inner Width : {Width}</h5>
            <div>
                <button onClick={() => { Setcolor("Red") }}>Red</button>
                <button onClick={() => { Setcolor("Blue") }}>Blue</button>
                <button onClick={() => { Setcolor("Green") }}>Green</button>
                <button onClick={() => { Setcolor("Black") }}>Black</button>
                <button onClick={() => { Setcolor("White") }}>White</button>
            </div>
        </div>
    )
}
