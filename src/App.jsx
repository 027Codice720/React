import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import imagen from './imagen.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className="text-3xl font-bold underline">
        Besame chikita
      </h1>
      <img src={imagen} alt="" />

    </div>
    

  )
}

export default App
