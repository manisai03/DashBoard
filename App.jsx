import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassComponent from './Component/ClassComponent.jsx'
import FunctionalComponent from './Component/FunctionalComponent.jsx'
function App() {
  return (
    <div className='Hii'>
      React APP!
      <ClassComponent/>
      <FunctionalComponent/>
    </div>
  )
}

export default App
