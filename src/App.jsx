import React from 'react'
import Navbar from './Components/Navbar'
import Profile from './Pages/Profile/Profile'
import Explore from './Pages/Explore/Explore';
import Problems from './Pages/Problems/Problems';
import Contest from './Pages/Contest/Contest';
import Discuss from './Pages/Discuss/Discuss';
import Interview from './Pages/Interview/Interview';
import Store from './Pages/Store/Store';
import { Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <div className=' bg-gray-100'>
      <div className='flex justify-center w-full bg-white mb-8'>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Problems />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/Problems' element={<Problems />} />
        <Route path='/Explore' element={<Explore />} />
        <Route path='/Contest' element={<Contest />} />
        <Route path='/Discuss' element={<Discuss />} />
      </Routes>
    </div>
  )
}

export default App