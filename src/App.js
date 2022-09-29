import Home from './components/Home'
import {Route, Routes } from 'react-router-dom'
import Destination from './components/Destination';
import Nav from './components/navBar'
import Crew from './components/crew'
import Technology from './components/Technology';
import { useLocation } from 'react-router-dom';


function App() {

  const getWindowSize = () =>{
    const viewPortWidth = window.innerWidth;
    return viewPortWidth
  }

  const windowSize = getWindowSize ()

  const r = useLocation()
  const location = r.pathname
  const currentRoute = location === '/'? 'home': location === '/destination'? 'destination': 
                  location === '/crew'? 'crew': location === '/technology'? 'technology': null


  const getBackgroundSize = (width) =>{
    const background = width > 1036 ? 'desktop': width > 700? 'tablet': 'mobile'
    return background
  }

  const currentDevice = getBackgroundSize(windowSize)
  const image  = `/assets/${currentRoute}/background-${currentRoute}-${currentDevice}.jpg`
  const body = document.getElementById('body')
  body.style.backgroundImage = `url(${image})`

 
  window.addEventListener('resize', ()=>{
    const viewPortWidth = getWindowSize ()
    const currentDevice = getBackgroundSize( viewPortWidth )
    const currentRoute = location === '/'? 'home': location === '/destination'? 'destination': 
                      location === '/crew'? 'crew': location === '/technology'? 'technology': null
    const image  = `/assets/${currentRoute}/background-${currentRoute}-${currentDevice}.jpg`
    
    const body = document.getElementById('body')
    body.style.backgroundImage = `url(${image})`
  } )

  return (
    <>
      <Nav />
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/destination' element={<Destination />}></Route>
          <Route path='/crew' element={<Crew />}></Route>
          <Route path='/technology' element={<Technology />}></Route>
      </Routes>
    </>
        
  );
}

export default App;
