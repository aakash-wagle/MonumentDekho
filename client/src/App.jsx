import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Landing from './Components/Landing/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Landing />
    </div>
  )
}

export default App
