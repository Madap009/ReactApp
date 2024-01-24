import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
//import { useLocation } from "react-router-dom";
import {useNavigate} from 'react-router-dom'

function Search() {
   let navigate = useNavigate();
  // const [data,setData] = useState([]);

  const [data,setData] = useState([]);
  const getCourseData = async () =>{
    try {
      
      const res = await axios.get('http://localhost:4000/courses');
      console.log(res.data);
      setData(res.data)
      navigate("/courses")
    }

    catch (error){
      console.log(error);
    }
  }

  useEffect(()=>{
    getCourseData();
  },[])
    
  return (
    <>
    <form>
    <div className='flex'>
        <input  className="impos" type='text'></input>
        <button type='submit'>Search</button>
    </div>
    </form>
    
    </>
  )
}

export default Search


