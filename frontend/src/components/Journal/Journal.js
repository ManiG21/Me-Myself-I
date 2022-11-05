import { useState } from 'react'
import './Journal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { faAngleDoubleLeft, faFaceAngry, faFaceMeh, faFaceSadCry, faFaceSmile, faFaceSmileBeam, } from '@fortawesome/free-solid-svg-icons'
//Frown Face emoji
{/* <FontAwesomeIcon icon="fa-solid fa-face-frown" /> */ }
//Exited Face emoji
// neutral face
//         <FontAwesomeIcon icon="fa-regular fa-face-frown" />
// <FontAwesomeIcon icon="fa-regular fa-face-meh" /> 
// <FontAwesomeIcon icon="fa-regular fa-face-smile-beam" />
{/* <FontAwesomeIcon icon={solid('face-smile-beam')} /> */ }

const emojis = [
    {icon: faFaceSmileBeam, class: 'Excited'},
    {icon: faFaceSmile, class: 'Happy'},
    {icon: faFaceMeh, class: 'Meh'},
]

export default function Journal() {
    const [data, setData] = useState({})
    const [step, setStep] = useState(0)
    //Create a function to update state data based on input
    // function that submits Journal data to Api 
    const submitData = () => {
        //Send data to api using fetch
        console.log(data)

    }

// function that updates the emoji in our data

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
                {emojis.map(emoji => <FontAwesomeIcon className={`Emojis ${emoji.class}`} icon={emoji.icon} /> )}
            </div> :
            <div>
                <form>
                    <label for = 'title'>Title Max 40 Characters</label>
                    <input value={data.title}  placeholder='Title' name='title' onChange={updateData}></input>
                    <label for = 'entry'>Title Max 500 Characters</label>
                    <textarea value={data.entry} name='entry' onChange={updateData}></textarea>
                    {/* <input value={data.color} name='color'onChange = {updateData}></input> */}
                    {/* <input value={data.emoji} name='emoji' onClick={updateData}></input> */}
                </form>

                <h1>Journal</h1>
                <button onClick={submitData}>Post</button>
            </div>}

    </div>
    //Add emojs using font awesome
    //Add color and Styling 
    //Add input for Title an Entry
}