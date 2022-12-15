import { useEffect, useState } from "react"
import React from 'react'
import formJSON from './Data.json'
import './FamilyData.css'

function FamilyData({data = formJSON[0]}) {
   const [elements, setElements] = useState(null);
   useEffect(() =>{
    setElements(data)
    
  
   }, [])

  const  Edit= (e) =>{
    e.preventDefault();


   }

   let { value,key, name, relation, spouse, location, birthyear, address, familyPhoto, children} = elements ?? {}
   
   const submit= (e)=>{
    e.preventDefault();
   }

   const handleChange = (e) =>{
      console.log(e)
      name = e.target.name;
      value = e.target.value;

      setElements({...data, [value]: value})
    } 


  return (
    <div className="details">

      <h3>{birthyear}</h3>
      <form >
    <h5>Name: <input type="text" name="" id="" value={name} onChange = {handleChange}/> </h5>
    <h5> Spouse: <input type="text" name="" id="" value={spouse} onChange = {handleChange}/></h5>
    <h5>Location: <input type="text" name="" id="" value={location} onChange = {handleChange}/></h5>
    <h5>Birth Year: <input type="text" name="" id="" value={birthyear} onChange = {handleChange}/></h5>
    <h5> Present Address: <input type="text" name="" id="" value={address} onChange = {handleChange}/></h5>
    <h5 className="inputImage">Family Photo: <input type="file" src="" alt="" /> <input type="image" src="" alt="" /><input type="file" src="" alt="" /> <input type="image" src="" alt="" /></h5>
    <button onClick={submit}>Submit</button> <br /><br />
    <button onClick={()=>Edit }>Edit</button>

      </form>
  </div>
  )
}

export default FamilyData