import { useState } from 'react'
import './App.css'

import copy from '../data/copy.json'

import ProjectTile from '../components/ProjectTile'

function App() {
  // console.log('copy', copy[0].eng)
  const [copyLang, setCopyLang] = useState(copy[0].eng.copy);

  // console.log('copyLang', copyLang)

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
        <div className='info-col col-span-1 pt-3 pr-4 pb-2 pl-1 text-left md:align-bottom'>
          <h1>David Malary</h1> 
          <div style={{margin: ".5rem 0"}}>
            <div className='lang-eng inline-block align-middle cursor-pointer' data-lang="eng" onClick={handleLanguage}>&#x1F1FA;&#x1F1F8;</div> || 
            <div className='lang-fre inline-block align-middle cursor-pointer' data-lang="fre" onClick={handleLanguage}>&#x1F1EB;&#x1F1F7;</div>
          </div>
          <div className='pt-2 pb-3 px-0'>{copyLang}</div>
          <hr />
          <div className='pt-2 pb-3 px-0'>
            <div className='w-10 h-10 px-1 inline-block'><a href="https://github.com/dmalary" target="_blank" rel="noopener noreferrer"><img src={`${import.meta.env.BASE_URL}/imgs/github-v2.webp`} alt="GitHub" /></a></div>
            <div className='w-10 h-10 px-1 inline-block'><a href="https://www.linkedin.com/in/david-malary-95565a94" target="_blank" rel="noopener noreferrer"><img src={`${import.meta.env.BASE_URL}/imgs/sm-icons-linkedin-in-logo.webp`} alt="LinkedIn" /></a></div>
            <div className='w-10 h-10 px-1 inline-block'><a href="https://observablehq.com/@madhat5" target="_blank" rel="noopener noreferrer"><img src={`${import.meta.env.BASE_URL}/imgs/puzzle.png`} alt="ObservableHQ" /></a></div>
            <div className='w-10 h-10 px-1 inline-block'><a href="https://medium.com/@davidmalary" target="_blank" rel="noopener noreferrer"><img src={`${import.meta.env.BASE_URL}/imgs/puzzle.png`} alt="Medium" /></a></div>
            {/* <div className='w-10 h-10 px-1 inline-block'><a href="https://www.instagram.com/from_studio_jane/" target="_blank" rel="noopener noreferrer"><img src={`${import.meta.env.BASE_URL}/imgs/sm-icons-instagram-glyph-logo.webp`} alt="Instagram" /></a></div> */}
            {/* <div className='w-10 h-10 px-1 inline-block'><a href="https://dribbble.com/thedavmal" target="_blank" rel="noopener noreferrer"><img src={`${import.meta.env.BASE_URL}/imgs/puzzle.png`} alt="Dribble" /></a></div> */}
            {/* <hr /> */}
            {/* {add email/cv  icons} */}
          </div>
        </div>
        <div className='portfolio-col col-span-1 md:col-span-2 px-1 py-4'>
          <div className='section-card section-dev py-4'>
            <div className='section-titles text-left py-2'><h2>Development</h2></div>
            <ProjectTile img={`${import.meta.env.BASE_URL}/imgs/dev/thesis.png`} copy={"(2020) Thesis, MS in Data Visualization. Parson's School of Design, The New School"} link={'https://parsons.nyc/thesis-2021/'} size={'w-full py-3 md:w-5/6'}/>
            <ProjectTile img={`${import.meta.env.BASE_URL}/imgs/dev/nfl_draft-project1.png`} copy={"An analysis of NFL draft positional history. Data gathered with custom built JS web scraper. Chart built with D3, layout in React."} link={'https://dmalary.github.io/nfl_draft-dashboard/'} size={'w-full py-3 md:w-5/6'}/>
            <ProjectTile img={`${import.meta.env.BASE_URL}/imgs/dev/city_champions.png`} copy={"Small multiples donut chart, to evaluate what North American City has won the most champpionships, within the four major sports (baseball, football, basketball, hockey)."} link={'https://github.com/dmalary/react_d3-map_challenge_4'} size={'w-full py-3 md:w-5/6'}/>
            <ProjectTile img={`${import.meta.env.BASE_URL}/imgs/dev/dm_visual_cv.png`} copy={"An upgraded version of my resume, based on a picture is worth a thousand words."} link={'https://github.com/dmalary/dm_cv-react-d3'} size={'w-full py-3 md:w-5/6'}/>
            <ProjectTile img={`${import.meta.env.BASE_URL}/imgs/dev/state_teams.png`} copy={"Hexagon US map, showing the number of major 4 sports league teams by State. The major 4 are NFL, NHL, MLB, NBA."} link={'https://github.com/dmalary/react_d3-map_challenge_4?'} size={'w-full py-3 md:w-5/6'}/>
          </div>
          <hr />
          <div className='section-card section-des py-4'>
            <div className='section-titles text-left py-2'><h2>Design</h2></div>
            <ProjectTile img={`${import.meta.env.BASE_URL}/imgs/des/focus_bottleneck.png`} size={'w-full md:w-full'}/>
            <ProjectTile img={`${import.meta.env.BASE_URL}/imgs/des/bottle_and_glass-005.png`} size={'w-full md:w-2/3'}/>
            <ProjectTile img={`${import.meta.env.BASE_URL}/imgs/des/two_bottles-005.png`} size={'w-full md:w-1/3'}/>
            <ProjectTile img={`${import.meta.env.BASE_URL}/imgs/des/two_bottles-004.png`} size={'w-full md:w-1/2'}/>
            <ProjectTile img={`${import.meta.env.BASE_URL}/imgs/des/bottle_and_glass-002.png`} size={'w-full md:w-1/2'}/>
            <ProjectTile img={`${import.meta.env.BASE_URL}/imgs/des/glass_3point_light.png`} size={'w-full md:w-3/4'}/>
            <ProjectTile img={`${import.meta.env.BASE_URL}/imgs/des/all_caps0001.png`} size={'w-full md:w-full'}/>
            <ProjectTile img={`${import.meta.env.BASE_URL}/imgs/des/blue-0001.png`} size={'w-full md:w-3/5'}/>
            <ProjectTile img={`${import.meta.env.BASE_URL}/imgs/des/kore_0001.png`} size={'w-full md:w-2/5'}/>
            <ProjectTile img={`${import.meta.env.BASE_URL}/imgs/des/studio_project-brochure.png`} size={'w-full md:w-full'}/>
            {/* add donuts video, add pen commercial vid */}
          </div>
          <hr />
          <div className="section-card section-wr py-4">
            <div className='section-titles text-left py-2'><h2>Writing</h2></div>
            <ul className="stacked-links text-left">
              <li>
                <a
                  href="https://medium.com/@davidmalary/how-to-build-a-simple-web-scraper-in-javascript-f57dd3e3abb1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  How to build a simple web scraper in Javascript
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@davidmalary/building-a-simple-mapbox-d3-visualization-cb23968078fe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Building a simple Mapbox & D3 visualization
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@davidmalary/nfl-draft-history-using-react-d3-db6b6b3a0388"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NFL Draft History, using React + D3
                </a>
              </li>
            </ul>
          </div>
          {/* <hr />
          <div className="section-card section-companies py-4">
            add company logos worked with
          </div> */}
        </div>
      </div>
    </>
  )
}

export default App
