import React, { useContext } from 'react'
import { Themecontext } from './UseContext';
export default function UseContextchildtwo() {
    const darktheme = useContext(Themecontext);
    function themestyle() {
        return {
            backgroundColor: darktheme ? "white" : "grey",
            color: darktheme ? "black" : "white",
        }
    }
    return (
        <div><h3 style={themestyle()}>UseContextchildtwo</h3></div>
    )
}
