import React, { useState } from 'react'

const Assignment3 = () => {
    const [check,setCheck] =useState(true);
  return (
    <div>
      <input type="checkbox" name="check" id="check" checked={check} onClick={()=>setCheck(!check)} /> <br></br>
      {check && <img src="temp.gif" alt="" />}
      
    </div> 
  )
}

export default Assignment3
