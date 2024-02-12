import { useState } from 'react'
import './App.css'

function App() {

  const [backgroundColor,setBackgroundColor] = useState('red')

  const blueButtonClick = () =>{
    setBackgroundColor('blue')
  }

  const greenButtonClick = () =>{
    setBackgroundColor('green')
  }
  
  const yellowButtonClick = () =>{
    setBackgroundColor('yellow')
  }

  const blackButtonClick = () =>{
    setBackgroundColor('black')
  }
  return (
    <div className='d-flex justify-content-center align-items-center p-5' style={{ width: '100%', height: '100vh', backgroundColor: backgroundColor }}>
      <div style={{ backgroundColor: 'white', width: '650px' }} className='p-5 text-center rounded'>
        <h2>Background Color Changer</h2>
        <div className='mt-4 p-3 d-flex justify-content-center align-items-center' style={{ gap: '30px' }}>
          <button onClick={blueButtonClick} className='bg-primary'>Blue</button>
          <button onClick={greenButtonClick} className='bg-success'>Green</button>
          <button onClick={yellowButtonClick} className='bg-warning'>Yellow</button>
          <button onClick={blackButtonClick} className='bg-dark'>Black</button>

        </div>
      </div>
    </div>
  )
}

export default App
