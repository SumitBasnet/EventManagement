import React, {useEffect} from 'react'
import CoverVdeo from './Components/CoverVdeo'
import FrontPageAnimation from './Components/FrontPageAnimation';


const App = () => {
  useEffect(() =>{
    let vh = window.innerHeight* .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  })
  return (
    <>
    <FrontPageAnimation />
    <CoverVdeo />
    </>
  )
}

export default App