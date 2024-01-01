import React from 'react'
import { useNavigate } from 'react-router-dom'

const Generator = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Generator</h1>
      <button type='button' onClick={() => navigate(-1)}>geri</button>
    </div>
  )
}

export default Generator