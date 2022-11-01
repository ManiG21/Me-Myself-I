import {useState} from 'react'
import './Journal.css'

export default function Journal() {
    const [data, setData] = useState({})
    //Create a function to update state data based on input
    //need a function that submits Journal data to Api 
    const submitData = () => {
     //Send data to api using fetch
     console.log(data)
     
    }
    return <div>
    <form>
    {/* <input value={employeeName} onChange = {updateEmployeeName}></input> */}
    {/* title (TEXT) 

entry (TEXT)

color (TEXT)

emoji ( */}


        <input value={data.title} onChange = {updateData.title}></input>
        <input value={data.entry} onChange = {updateData.entry}></input>
        <input value={data.color} onChange = {updateData.color}></input>
        <input value={data.emoji} onChange = {updateData.emoji}></input>
    </form>
    
        <h1>Journal</h1>
        <button onClick={submitData}>Post</button>
    </div>
 //Add emojs using font awesome
 //Add color and Styling 
 //Add input for Title an Entry
 }