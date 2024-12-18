import { useState } from 'react'
import './App.css'
import ProjectTile from '../components'

function App() {

  return (
    <>
      <div>
        <div>left: brief description of me</div>
        <div>
          right: tiles of portfolio
          <div className='section-1'>dev</div>
          <div className='section-2'>3d</div>
          <div className='section-3'>writing</div>
        </div>
      </div>
    </>
  )
}

export default App
