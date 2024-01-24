import React from 'react'
import Back from '../common/Back'
import  Coursescard  from './Coursescard'
import Search from './Search'


function Allcourses() {
  return (
    <>
     <Back title='Explore Courses'/>
     <Search/>
     <div className='margins'>
     <Coursescard/>
     </div>
    </>
   
  )
}

export default Allcourses