import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import './Allcourses.css'



function Coursescard() {
  const [data,setData] = useState([]);

  const getCourseData = async () =>{
    try {
      
      const res = await axios.get('http://localhost:4000/courses');
      console.log(res.data);
      setData(res.data)
      
    }
    catch (error){
      console.log(error);
    }
  }

useEffect(()=>{
  getCourseData();
},[])


  return (
    <div class="row row-cols-2 row-cols-md-2 " style={{paddingTop:"40px"}}>
      {
        data.map((data,index)=>
        <div className='corcard'style={{padding:"30px"}} >
          <div class="col">
        <div class="card">
      <img src={data.courseImage} class="card-img-top" alt="..." style={{padding:"30px"}}/>
      <div class="card-body">
        <h5 class="card-title">{data.courseName}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <h6> <i class="fa fa-clock-o" aria-hidden="true"></i>{data.duration}</h6>
        <h6> {data.price}</h6>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-primary" type="button">Enroll</button>
</div>
      </div>
    </div>
  </div>
        </div>
      

        )
      }
    
    </div>
  )
}

export default Coursescard



// style={{padding:"30px"}}

