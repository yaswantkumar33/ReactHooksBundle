import React, { useState } from 'react'
import UseContextchildone from './UseContextchildone';
import UseContextchildtwo from './UseContextchildtwo';
export const Themecontext = React.createContext();
export default function UseContext() {
    // to create a content in react 
    const [darktheme, setDarktheme] = useState(true)
    return (
        <div>
            <h1>UseContext</h1>
            <button onClick={() => {
                setDarktheme((prev) => {
                    return !prev;

                })
            }}>ToggleDarktheme</button>
            <Themecontext.Provider value={darktheme}>
                <UseContextchildone />
                <UseContextchildtwo />
            </Themecontext.Provider>


        </div>
    )
}
