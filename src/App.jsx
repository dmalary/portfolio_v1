import { useState } from 'react'
import './App.css'
// import ProjectTile from '../components'

function App() {

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='col-span-1 p-4 text-left'>
          <h1>David Malary</h1> 
          <p>Open to opportunities as a Full Stack Web Developer, Data Visualization Developer, or Creative Technologist. Bilingual in English and French, with expertise in crafting innovative, user-focused solutions. </p>
        </div>
        <div className='col-span-1 md:col-span-2 p-4'>
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
