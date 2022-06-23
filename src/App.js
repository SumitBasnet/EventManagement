import React, {useEffect} from 'react'
import Banner from './Components/Banner';
import CoverVdeo from './Components/CoverVdeo'
import FrontPageAnimation from './Components/FrontPageAnimation';
import Header from './Components/Header';


const App = () => {
  useEffect(() =>{
    let vh = window.innerHeight* .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  })
  return (
    <>
    <FrontPageAnimation />
    <Header />
    <CoverVdeo />
   
    </>
  )
}

export default App