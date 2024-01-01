import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
        <button type='button' onClick={() => navigate("/scanner")}>Scanner</button>
        <button type='button' onClick={() => navigate("/generator")}>Generator</button>
    </div>
  )
}

export default Home