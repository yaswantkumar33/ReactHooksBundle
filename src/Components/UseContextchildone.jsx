import React, { useContext } from 'react'
import { Themecontext } from './UseContext'

export default function UseContextchildone() {
    const darktheme = useContext(Themecontext);
    function themestyle() {
        return {
            backgroundColor: darktheme ? "grey" : "white",
            color: darktheme ? "white" : "black",
        }
    }
    return (
        <div><h3 style={themestyle()}>UseContextchildone</h3></div >
    )
}
