import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Dashboard from './components/Dashboard';

function App() {
 const API_URL = "https://api.spoonacular.com/recipes"
 const API_KEY = "847cfcc8a0b34236bcfc2f0693d2e601"

  return (
    <>
    <div className=''>
     <Navbar/>
      <Search/>
      <Dashboard url={API_URL} apikey={API_KEY}/>
    </div>
    </>
  )
}

export default App
