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

  const socialPrefix = import.meta.env.BASE_URL;

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='info-col col-span-1 pt-3 pr-4 pb-2 pl-1 text-left md:align-bottom'>
          <h1 className='font-garamond'>David <br/> Malary</h1> 
          <div style={{margin: ".5rem 0"}}>
            <div className='lang-eng inline-block align-middle cursor-pointer' data-lang="eng" onClick={handleLanguage}>&#x1F1FA;&#x1F1F8;</div> || 
            <div className='lang-fre inline-block align-middle cursor-pointer' data-lang="fre" onClick={handleLanguage}>&#x1F1EB;&#x1F1F7;</div>
          </div>
          <div className='pt-2 pb-3 px-0 font-montserrat'>{copyLang}</div>
          <hr />
          <div className='pt-5 pb-3 px-0'>
            <div className='w-10 h-10 px-1 inline-block'><a href="https://github.com/dmalary" target="_blank" rel="noopener noreferrer">
              <img src={socialPrefix + 'imgs/github-v2.webp'} alt="GitHub" />
            </a></div>
            <div className='w-10 h-10 px-1 inline-block'><a href="https://www.linkedin.com/in/david-malary-95565a94" target="_blank" rel="noopener noreferrer">
              <img src={socialPrefix + 'imgs/sm-icons-linkedin-in-logo.webp'} alt="LinkedIn" />
            </a></div>
            <div className='w-10 h-10 px-1 inline-block'><a href="https://observablehq.com/@madhat5" target="_blank" rel="noopener noreferrer">
              <img src={socialPrefix + 'imgs/obshq.png'} alt="ObservableHQ" />
            </a></div>
            <div className='w-10 h-10 px-1 inline-block'><a href="https://medium.com/@davidmalary" target="_blank" rel="noopener noreferrer">
              <img src={socialPrefix + 'imgs/medium_logo_icon.webp'} alt="Medium" />
            </a></div>
            {/* <div className='w-10 h-10 px-1 inline-block'><a href="https://www.instagram.com/from_studio_jane/" target="_blank" rel="noopener noreferrer">
              <img src={socialPrefix + 'imgs/sm-icons-instagram-glyph-logo.webp'} alt="Instagram" />
            </a></div> */}
            {/* <div className='w-10 h-10 px-1 inline-block'><a href="https://dribbble.com/thedavmal" target="_blank" rel="noopener noreferrer">
              <img src={socialPrefix + 'imgs/puzzle.png'} alt="Dribble" />
            </a></div> */}
            {/* <hr /> */}
            {/* {add email/cv  icons} */}
          </div>
          <hr />
          <div className='pt-5 pb-3 px-0 font-montserrat'>
            <div className='anchors block py-1'><a href="#section-dev">Development</a></div>
            {/* <div className='anchors block py-1'><a href="#section-des">Design & 3D</a></div> */}
            <div className='anchors block py-1'><a href="#section-carto">Cartography</a></div>
            <div className='anchors block py-1'><a href="#section-des">3D</a></div>
            <div className='anchors block py-1'><a href="#section-wr">Writing</a></div>
          </div>
        </div>
        <div className='portfolio-col col-span-1 md:col-span-2 px-1 py-4'>
          <div className='section-card section-dev py-4'>
            <div id="section-dev" className='section-titles text-left py-2 font-garamond'><h2>Development</h2></div>
            <ProjectTile img={'/imgs/dev/thesis.png'} copy={"(2020) Thesis, MS in Data Visualization. Parson's School of Design, The New School"} link={'https://parsons.nyc/thesis-2021/'} size={'w-full py-3 md:w-5/6'}/>
            <div className='py-4'>&#10209;&#10209;&#10209;&#10209;&#10209;</div>
            <ProjectTile img={'/imgs/dev/nfl_draft-project1.png'} copy={"An analysis of NFL draft positional history. Data gathered with custom built JS web scraper. Chart built with D3, layout in React."} link={'https://dmalary.github.io/nfl_draft-dashboard/'} size={'w-full py-3 md:w-5/6'}/>
            <div className='py-4'>&#10209;&#10209;&#10209;&#10209;&#10209;</div>
            <ProjectTile img={'/imgs/dev/city_champions.png'} copy={"Small multiples donut chart, to evaluate what North American City has won the most champpionships, within the four major sports (baseball, football, basketball, hockey)."} link={'https://github.com/dmalary/react_d3-map_challenge_4'} size={'w-full py-3 md:w-5/6'}/>
            <div className='py-4'>&#10209;&#10209;&#10209;&#10209;&#10209;</div>
            <ProjectTile img={'/imgs/dev/dm_visual_cv.png'} copy={"An upgraded version of my resume, based on a picture is worth a thousand words."} link={'https://github.com/dmalary/dm_cv-react-d3'} size={'w-full py-3 md:w-5/6'}/>
            <div className='py-4'>&#10209;&#10209;&#10209;&#10209;&#10209;</div>
            <ProjectTile img={'/imgs/dev/state_teams.png'} copy={"Hexagon US map, showing the number of major 4 sports league teams by State. The major 4 are NFL, NHL, MLB, NBA."} link={'https://github.com/dmalary/react_d3-map_challenge_4'} size={'w-full py-3 md:w-5/6'}/>
            <div className='py-4'>&#10209;&#10209;&#10209;&#10209;&#10209;</div>
            <ProjectTile img={'/imgs/dev/30day_chlng-4.png'} copy={"Waffle Chart of home runs and steals in 2024 (top 10 players in both categories)"} link={'https://observablehq.com/d/576439936cf10801'} size={'w-full py-3 md:w-5/6'}/>
            <div className='py-4'>&#10209;&#10209;&#10209;&#10209;&#10209;</div>
            <ProjectTile img={'/imgs/dev/30day_chlng-2.png'} copy={"A comparison of top WNBA Rookies, using radar small multiples."} link={'https://observablehq.com/d/b1aae0954e665717'} size={'w-full py-3 md:w-5/6'}/>
            <div className='py-4'>&#10209;&#10209;&#10209;&#10209;&#10209;</div>
            <ProjectTile img={'/imgs/dev/30day_chlng-21.png'} copy={"Wind farm openings in the US, by state, from 1981 to 2014."} link={'https://observablehq.com/d/e5f689f2cb95ad0f'} size={'w-full py-3 md:w-5/6'}/>
            <div className='py-4'>&#10209;&#10209;&#10209;&#10209;&#10209;</div>
            <ProjectTile img={'/imgs/dev/30day_chlng-15.png'} copy={"Visualizing the relationships between Titanic passenger boarding locations and class, as well as class and survival."} link={'https://observablehq.com/d/06b38324e87f4747'} size={'w-full py-3 md:w-5/6'}/>
            <div className='py-4'>&#10209;&#10209;&#10209;&#10209;&#10209;</div>
            <ProjectTile img={'/imgs/dev/30day_chlng-16.png'} copy={"Sunburst chart of NFL stadium weather based on average temperatures, and the playing surface types for each."} link={'https://observablehq.com/d/572a27cbded15a25'} size={'w-full py-3 md:w-5/6'}/>
          </div>
          <hr />
          <div className='section-card section-carto py-4'>
            <div id="section-carto" className='section-titles text-left py-2 font-garamond'><h2>Cartography</h2></div>
            <ProjectTile img={'/imgs/carto/nystate-qgisHillshade-002.png'} copy={'Digital Elevation Model (DEM) of New York State (QGIS + Inkscape).'} size={'w-full md:w-full'}/>
            <div className='py-4'>&#10209;&#10209;&#10209;&#10209;&#10209;</div>
            <ProjectTile img={'/imgs/carto/gunks-0013.png'} copy={'Shawangunk Ridge Hillshade Map (QGIS + Blender3d).'} size={'w-full md:w-full'}/>
          </div>
          <hr />
          <div className='section-card section-des py-4'>
            {/* <div id="section-des" className='section-titles text-left py-2 font-garamond'><h2>Design & 3D</h2></div> */}
            <div id="section-des" className='section-titles text-left py-2 font-garamond'><h2>3D</h2></div>
            <ProjectTile img={'/imgs/des/focus_bottleneck.png'} size={'w-full md:w-full'}/>
            <ProjectTile img={'/imgs/des/bottle_and_glass-005.png'} size={'w-full md:w-2/3'}/>
            <ProjectTile img={'/imgs/des/two_bottles-005.png'} size={'w-full md:w-1/3'}/>
            <ProjectTile img={'/imgs/des/condiment_boards.jpg'} size={'w-full md:w-full'}/>
            <ProjectTile img={'/imgs/des/bento_three.jpg'} size={'w-full md:w-full'}/>
            <ProjectTile img={'/imgs/des/bento_open.jpg'} size={'w-full md:w-1/2'}/>
            <ProjectTile img={'/imgs/des/bento_closed.jpg'} size={'w-full md:w-1/2'}/>
            <ProjectTile img={'/imgs/des/all_caps0001.png'} size={'w-full md:w-full'}/>
            <ProjectTile img={'/imgs/des/blue-0001.png'} size={'w-full md:w-3/5'}/>
            <ProjectTile img={'/imgs/des/design_lamp.jpg'} size={'w-full md:w-2/5'}/>
            <ProjectTile img={'/imgs/des/design_lamp_2.jpg'} size={'w-full md:w-full'}/>
            <ProjectTile img={'/imgs/des/ceramic_bottle.jpg'} size={'w-full md:w-2/3'}/>
            <ProjectTile img={'/imgs/des/bottle_and_glass-002.png'} size={'w-full md:w-1/3'}/>
            <ProjectTile img={'/imgs/des/glass_3point_light.png'} size={'w-full md:w-full'}/>
            <ProjectTile img={'/imgs/des/shampoo_light.jpg'} size={'w-full md:w-1/3'}/>
            <ProjectTile img={'/imgs/des/shampoo_dark.jpg'} size={'w-full md:w-2/3'}/>
            <ProjectTile img={'/imgs/des/kore_0001.png'} size={'w-full md:w-full'}/>
            {/* <ProjectTile img={'/imgs/des/studio_project-brochure.png'} size={'w-full md:w-full'}/> */}
            {/* add donuts video, add pen commercial vid */}
        </div>
        <hr />
        <div className="section-card section-wr py-4 font-montserrat">
          <div id="section-wr" className='section-titles text-left py-2 font-garamond'><h2>Writing</h2></div>
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
