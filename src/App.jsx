import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// component
import Reciept from './component/reciept/reciept'
import BlurredBackground from './component/background/BlurredBackground'
import Headerbar from './component/header/headerbar'

// receipt setup data

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <BlurredBackground>
      {/* Add justify-center here to center the content */}
      <header className='flex justify-center'>
        <Headerbar />
      </header>
      <div className='flex h-screen '>
        <div className='w-1/2'>
          <Reciept />
        </div>
      </div>
    </BlurredBackground>

    </>
  )
}

export default App