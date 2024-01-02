import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Generator from '../components/Generator'
import Scanner from '../components/Scanner'

const router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/scanner' element={<Scanner/>}/>
        <Route path='/generator' element={<Generator/>}/>
    </Routes>
  )
}

export default router