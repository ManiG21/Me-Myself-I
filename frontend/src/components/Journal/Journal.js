import {useState} from 'react'
import './Journal.css'

//Frown Face emoji
<FontAwesomeIcon icon="fa-regular fa-face-frown" />
{/* <FontAwesomeIcon icon="fa-solid fa-face-frown" /> */}
//Exited Face emoji
<FontAwesomeIcon icon="fa-regular fa-face-smile-beam" />

export default function Journal() {
    const [data, setData] = useState({})
    //Create a function to update state data based on input
    //need a function that submits Journal data to Api 
    const submitData = () => {
     //Send data to api using fetch
     console.log(data)
     
    }

    const updateData = (e) => {
        setData({...data, [e.target.name]: e.target.value})
        console.log(e.target)
        // (e.target.value)
    }
    return <div>
    <form>
    {/* <input value={employeeName} onChange = {updateEmployeeName}></input> */}
    {/* title (TEXT) 

entry (TEXT)

color (TEXT)

emoji ( */}
{/* const employeeObj = {
        employee_name: employeeName,
        employee_number: employeeNumber,
        date_hired: dateHired,
        city_id: cityId 
    } */}

        <input value={data.title} name='title' onChange = {updateData}></input>
        <input value={data.entry} onChange = {updateData}></input>
        <input value={data.color} onChange = {updateData}></input>
        <input value={data.emoji} onChange = {updateData}></input>
    </form>
    
        <h1>Journal</h1>
        <button onClick={submitData}>Post</button>

    </div>
 //Add emojs using font awesome
 //Add color and Styling 
 //Add input for Title an Entry
 }