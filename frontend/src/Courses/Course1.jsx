import React from 'react'
import Navbaar from '../componants/Navbaar'
import Footer from '../componants/Footer'
import Course from '../componants/Course'
import list from '../../public/booklist.json'

function Course1() {
  console.log(list)
  return (
    <>
    <Navbaar/>
    <div className='min-h-screen mr-3'><Course/></div>
    
    <Footer/>
    </>
  )
}

export default Course1