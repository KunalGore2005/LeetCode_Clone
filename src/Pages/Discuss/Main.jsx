import React from 'react'
import Cards from '../Problems/Cards'
import Topbar from './Topbar'
import Discussions from './Discussions'
const Main = () => {
  return (
    <div className='pl-50'>
        <Cards />
        <Topbar />
        <Discussions />
    </div>
  )
}

export default Main