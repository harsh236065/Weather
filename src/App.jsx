import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeatherGet from './WeatherGet/WeatherGet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WeatherGet/>
        
    </>
  )
}

export default App
