import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './component/common/Header'
import Home from './component/home/Home'
import About from './component/about/About'
import Signup from './component/signup/Signup'
import Allcourses from './component/allcourses/Allcourses'
import './App.css'


function App() {
  return (
    <div>
    <BrowserRouter>
      <Header/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/courses' element={<Allcourses/>}/>
       <Route path='/signup' element={<Signup/>}/>
      </Routes>
    
    </BrowserRouter>
    </div>
  )
}

export default App