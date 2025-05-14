import React, { useState } from 'react'

const Assignment4 = () => {
    const [student,setStudent]=useState(['Tanay'])
    const [name,setName]=useState('');
    const add =()=>{
        let copy=[...student];
        copy.push(name);
        setStudent(copy);
    }
  return (
    <div>
      <input type="text" onChange={(e)=>{setName(e.target.value)}} />
      <button onClick={()=>add()}>Add</button>
      <ul>
      {student.map((val,idx)=>{
        return(
                <li key={idx}>{val}</li>
        )
      })}
      </ul>
    </div>
  )
}

export default Assignment4
