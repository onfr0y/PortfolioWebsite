import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// component
import Reciept from './component/reciept/reciept'
import BlurredBackground from './component/background/BlurredBackground'
import Headerbar from './component/header/headerbar'
import About from './component/about/About'
import Work from './component/work/Work'
import Research from './component/research/Research'
import Experience from './component/experience/Experience'
import Contact from './component/contact/Contact'

// receipt setup data

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <BlurredBackground>
      {/* Header */}
      <div className='sticky top-0 z-50 bg-white'>
        <Headerbar />
      </div>

      {/* Main Content Sections */}
      <div className='flex flex-col'>
        {/* Hero/Skills Section */}
        <section id="home" className='flex min-h-screen'>
          <div className='w-full flex justify-center items-center py-4 sm:py-8'>
            <Reciept />
          </div>
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Work Section */}
        <section id="work">
          <Work />
        </section>

        {/* Research Section */}
        <section id="research">
          <Research />
        </section>

        {/* Experience Section */}
        <section id="experience">
          <Experience />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>
      </div>
    </BlurredBackground>

    </>
  )
}

export default App