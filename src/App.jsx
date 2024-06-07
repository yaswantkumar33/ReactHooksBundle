import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseState from './Components/UseState'
import UseEffect from './Components/UseEffect'
import UseContext from './Components/UseContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <center>
      <h1>React-Hooks Complete Bundle</h1>
      <UseState />
      <UseEffect />
      <UseContext />
    </center>
  )
}

export default App
