import React,{useState, useCallback} from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const [name1,setName]=useState('')
  const navigate=useNavigate()

  const onChangeValue=(e)=>{
      setName(e.target.value)
  }

  const submitroom=useCallback(()=>{
     navigate(`/room/${name1}`)
  },[navigate,name1])
     

  return (
    <div>
        <h1>Video Call {name1}</h1>
        <input type="text" onChange={(e)=>onChangeValue(e)} value={name1} placeholder='Room ID' />
        <button onClick={()=>submitroom()}>Join</button>
    </div>
  )
}
