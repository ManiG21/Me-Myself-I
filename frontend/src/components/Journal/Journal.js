import {useState} from 'react'
import './Journal.css'

export default function Journal() {
    const [data, setData] = useState({})
    //Create a function to update state data based on input
    //need a function that submits Journal data to Api 
    const submitData = () => {
     //Send data to api using fetch
    }
    return <div>
    
        <h1>Journal</h1>
        <button onClick={submitData}>Post</button>
    </div>
 //Add emojs
 //Add color and Styling 
 //Add input for Title an Entry
 }