import { useState } from 'react'
import './Journal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faFaceAngry, faFaceMeh, faFaceSadCry, faFaceSmile, faFaceSmileBeam, } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";


export default function Journal({profile}) {
    const [data, setData] = useState({user_id: profile.id})
    const [step, setStep] = useState(0)
    const navigate = useNavigate();

    const emojis = [
        {icon: faFaceSmileBeam, class: 'excited', color: 'gold'},
        {icon: faFaceSmile, class: 'happy', color: 'green'},
        {icon: faFaceMeh, class: 'meh', color: 'blue'},
        {icon: faFaceAngry, class: 'angry', color: 'red'},
        {icon: faFaceSadCry, class: 'sad', color: 'light-purple'},
    ]
    //Create a function to update state data based on input
    // function that submits Journal data to Api 
    const submitData = () => {
        //Send data to api using fetch
        fetch("https://dsewdfflaa4b0.cloudfront.net/journals", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(() => {
        window.alert('Your Journal has been posted!!😊😊');
        navigate('/pie-chart')
    })
    }
    
// function that updates the emoji in our data
const onClickEmoji = (e, id) => {
    // Update Journal Data with an emoji
    setData({ ...data, emoji: emojis[id].class, color: emojis[id].color })
    console.log(id)
    // Go to next step
    setStep(1)
}

    const updateData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        console.log(e.target)
    }
    return <div className='main-journal-container'>
        {step === 0 ?
            <div>
               <h1 className='orange-header' > Which Emoji describes how you are feeling today?</h1>
                {emojis.map((emoji, id) => <FontAwesomeIcon data-id={id} onClick={(e)=> onClickEmoji(e, id)} className={`Emojis ${emoji.class}`} icon={emoji.icon} color={emoji.color} /> )}
            </div> :
            <div>
                 <h1 className='orange-header'>Write a Journal entry to describe what happened today?</h1>
                <div className='form-container'>
                    <form>
                        <input maxLength="40" value={data.title}  placeholder='Title' name='title' onChange={updateData}></input>
                        <break></break>
                        <textarea maxLength="400"   placeholder='Entry' value={data.entry} name='entry' onChange={updateData}></textarea>
                    </form>
                </div>
                <button id='post' onClick={submitData}>Post</button>

               
            </div>}

    </div>
}