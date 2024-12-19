import { useState } from 'react'
import './App.css'

import copy from '../data/copy.json'

import ProjectTile from '../components/ProjectTile'

function App() {
  // console.log('copy', copy[0].eng)
  const [copyLang, setCopyLang] = useState(copy[0].eng.copy);

  // console.log('copyLang', copyLang)

  // const handleLanguage = (e) => {
  //   // console.log(e.target.className);
  //   e.target.className === 'lang-eng' ? setCopyLang(copy[0].eng.copy) : setCopyLang(copy[0].fre.copy)
  // };

  const handleLanguage = (e) => {
    const lang = e.target.dataset.lang; // Use data-lang attribute
    if (lang === 'eng') {
      setCopyLang(copy[0].eng.copy);
    } else if (lang === 'fre') {
      setCopyLang(copy[0].fre.copy);
    }
  };

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='col-span-1 pt-3 pr-4 pb-2 pl-1 text-left md:align-bottom'>
          <h1>David Malary</h1> 
          <div style={{margin: ".5rem 0"}}>
            <div className='lang-eng inline-block' data-lang="eng" onClick={handleLanguage} style={{ cursor: "pointer", verticalAlign:'middle'}}>&#x1F1FA;&#x1F1F8;</div> || 
            <div className='lang-fre inline-block' data-lang="fre" onClick={handleLanguage} style={{ cursor: "pointer", verticalAlign:'middle'}}>&#x1F1EB;&#x1F1F7;</div>
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
          {/* right: tiles of portfolio */}
          <div className='section-card section-dev pt-4 pr-2 pb-4 pl-2'>
            {/* dev */}
            <ProjectTile img={'../imgs/puzzle.png'} link={'https://github.com/dmalary'} size={'w-10'}/>
          </div>
          <hr />
          <div className='section-card section-des pt-4 pr-2 pb-4 pl-2'>
            {/* 3d design */}
            <ProjectTile img={'../imgs/des/focus_bottleneck.png'} copy={'lorem ipsum'} link={'https://github.com/dmalary'} size={'w-2/3'}/>
            <ProjectTile img={'../imgs/puzzle.png'} size={'w-25'}/>
          </div>
          <hr />
          <div className='section-card section-wr pt-4 pr-2 pb-4 pl-2'>
            {/* writing */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
