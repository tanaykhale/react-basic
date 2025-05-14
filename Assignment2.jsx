import React, { useState } from 'react'

const Assignment2 = () => {
    const [num,setNum]=useState(0);
  return (
    <div>
        <h1>{num}</h1>
        <button onClick={()=>setNum(num+1)}>+</button>
        <button onClick={()=>setNum(num-1)}>-</button>
      
    </div>
  )
}

export default Assignment2
