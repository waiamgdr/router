import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const [num, setNum]=useState(0)
    const navigate=useNavigate()
    useEffect(()=>{
setInterval(()=>setNum(num+1),1000);
if ( num==3 ) 
 navigate('/')  ;

    },[num])

   
    
  return (
    <div>
         
       
    </div>
  )
}

export default About