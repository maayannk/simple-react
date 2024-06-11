import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='parent'>
    <div className='child'>
      <div>
        {count}
      </div>
      <button className='button' onClick={()=> setCount(count+1)}>Increament</button>
      <button className='button' onClick={()=> setCount(count-1)}>Decrement</button>
  </div>
  </div>
  )
}

export default App
