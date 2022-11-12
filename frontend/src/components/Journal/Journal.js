import { useState } from 'react'
import './Journal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faFaceAngry, faFaceMeh, faFaceSadCry, faFaceSmile, faFaceSmileBeam, } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";



export default function Journal() {
    const [data, setData] = useState({})
    const [step, setStep] = useState(0)
    const navigate = useNavigate();
    
    const emojis = [
        {icon: faFaceSmileBeam, class: 'excited', color: 'gold'},
        {icon: faFaceSmile, class: 'happy', color: 'green'},
        {icon: faFaceMeh, class: 'meh', color: 'blue'},
        {icon: faFaceAngry, class: 'angry', color: 'red'},
        {icon: faFaceSadCry, class: 'sad', color: 'light-blue'},
    ]
    //Create a function to update state data based on input
    // function that submits Journal data to Api 
    const submitData = () => {
        //Send data to api using fetch
        data.entry_time = Date.now()
        fetch("http://localhost:3030/journals", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(() => {
        window.alert('Your Journal has been posted!!😊😊')
    })
    // .then(res => (refreshData))
    setData('')


    }
    
 
// function that updates the emoji in our data
const onClickEmoji = (e, id) => {
    // const id = e.target.dataset.id
    // const id = e.target['data-id']
    // Update Journal Data with an emoji
    setData({ ...data, emoji: emojis[id].class, color: emojis[id].color })
    console.log(id)
    // Go to next step
    setStep(1)
}

    const updateData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        console.log(e.target)
        // (e.target.value)
    }
    return <div>
        {step === 0 ?
            <div>
                {/* <FontAwesomeIcon className='Emojis Excited' icon={faFaceSmileBeam} />
                <FontAwesomeIcon className='Emojis Happy' icon={faFaceSmile} />
                <FontAwesomeIcon className='Emojis Meh' icon={faFaceMeh} />
                <FontAwesomeIcon className='Emojis Angry' icon={faFaceAngry} />
                <FontAwesomeIcon className='Emojis Sad' icon={faFaceSadCry} />
                <FontAwesomeIcon className='Emojis Sad' icon={faAngleDoubleLeft} /> */}
                {emojis.map((emoji, id) => <FontAwesomeIcon data-id={id} onClick={(e)=> onClickEmoji(e, id)} className={`Emojis ${emoji.class}`} icon={emoji.icon} color={emoji.color} /> )}
            </div> :
            <div>
                 <h1>Journal</h1>
                <div className='form-container'>
                    <form>
                        {/* <label htmlFor = 'title'>Title Max 40 Characters</label> */}
                        <input maxLength="40" value={data.title}  placeholder='Title' name='title' onChange={updateData}></input>
                        <break></break>
                        {/* <label htmlFor = 'entry'>Title Max 500 Characters</label> */}
                        <textarea maxLength="400"   placeholder='Entry' value={data.entry} name='entry' onChange={updateData}></textarea>
                        {/* <input value={data.color} name='color'onChange = {updateData}></input> */}
                        {/* <input value={data.emoji} name='emoji' onClick={updateData}></input> */}
                    </form>
                </div>
                <button onClick={submitData}>Post</button>

               
            </div>}

    </div>
    //Add emojs using font awesome
    //Add color and Styling 
    //Add input for Title an Entry
}