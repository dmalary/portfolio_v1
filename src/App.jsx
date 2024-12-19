import { useState } from 'react'
import './App.css'

import copy from '../data/copy.json'

// import ProjectTile from '../components'

function App() {
  // console.log('copy', copy[0].eng)
  const [copyLang, setCopyLang] = useState(copy[0].eng.copy);

  // console.log('copyLang', copyLang)

  const handleLanguage = (e) => {
    // console.log(e.target.className);
    e.target.className === 'lang-eng' ? setCopyLang(copy[0].eng.copy) : setCopyLang(copy[0].fre.copy)
  };

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='col-span-1 p-4 text-left'>
          <h1>David Malary</h1> 
          <div style={{margin: ".5rem 0"}}>
            <div className='lang-eng' onClick={handleLanguage} style={{ cursor: "pointer", display: "inline-block", verticalAlign:'middle'}}>&#x1F1FA;&#x1F1F8;</div> || 
            <div className='lang-fre' onClick={handleLanguage} style={{ cursor: "pointer", display: "inline-block", verticalAlign:'middle'}}>&#x1F1EB;&#x1F1F7;</div>
          </div>
          <div className='pt-2 pr-0 pb-3 pl-0'>{copyLang}</div>
          <hr />
          <div className='pt-2 pr-0 pb-3 pl-0'>
            <div className='w-10 h-10 pr-1 pl-1 inline-block'><a href="https://github.com/dmalary" target="_blank" rel="noopener noreferrer"><img src="/imgs/github-v2.webp" alt="" /></a></div>
            <div className='w-10 h-10 pr-1 pl-1 inline-block'><a href="https://www.linkedin.com/in/david-malary-95565a94" target="_blank" rel="noopener noreferrer"><img src="/imgs/sm-icons-linkedin-in-logo.webp" alt="" /></a></div>
            <div className='w-10 h-10 pr-1 pl-1 inline-block'><a href="https://observablehq.com/@madhat5" target="_blank" rel="noopener noreferrer"><img src="/imgs/puzzle.png" alt="" /></a></div>
            <div className='w-10 h-10 pr-1 pl-1 inline-block'><a href="https://medium.com/@davidmalary" target="_blank" rel="noopener noreferrer"><img src="/imgs/puzzle.png" alt="" /></a></div>
            {/* <div className='w-10 h-10 pr-1 pl-1 inline-block'><a href="https://www.instagram.com/from_studio_jane/" target="_blank" rel="noopener noreferrer"><img src="/imgs/sm-icons-instagram-glyph-logo.webp" alt="" /></a></div> */}
            {/* <div className='w-10 h-10 pr-1 pl-1 inline-block'><a href="https://dribbble.com/thedavmal" target="_blank" rel="noopener noreferrer"><img src="/imgs/puzzle.png" alt="" /></a></div> */}
            {/* <hr /> */}
          </div>
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
