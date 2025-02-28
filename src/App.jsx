import React from 'react'
import { useState, useEffect } from 'react'
import Dashboard1 from './components/Dashboard1'
import Dashboard_temp from './components/Dashboard_temp'


const App = () => {
  return (
    <>
      <div>
        <Dashboard1 />
        <Dashboard_temp />
      </div>
    </>  
  )
}

export default App