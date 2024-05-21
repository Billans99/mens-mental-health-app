// imports
import NavBar from './NavBar.jsx'
import React, { useEffect, useState } from 'react'
import Home from './Home.jsx'
import Statistics from './Statistics.jsx'
import Members from './Members.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import GeneralSupport from './GeneralSupport.jsx'
import CrisisSupport from './CrisisSupport.jsx'
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'


const App = () => {

// states
//


  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Statistics" element={<Statistics/>}  />
        <Route path="/Members" element={<Members/>}  /> 
        <Route path="/About" element={<About/>}  />
        <Route path="/Contact" element={<Contact/>}  />
        <Route path="/GeneralSupport" element={<GeneralSupport/>}  />
        <Route path="/CrisisSupport" element={<CrisisSupport/>} />
      </Routes>
    </>
  )
}

export default App
