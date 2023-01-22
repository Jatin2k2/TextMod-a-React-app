import React, {useState} from 'react';



export default function TextForm(props) {

    const textInputField = document.querySelector("#mybox")
    const utterThis = new SpeechSynthesisUtterance()
    const synth = window.speechSynthesis
    let ourText = ""

    const checkBrowserCompatibility = () => {
    "speechSynthesis" in window
        ? console.log("Web Speech API supported!")
        : console.log("Web Speech API not supported!")
    }

    checkBrowserCompatibility()

    const handelSpeaking = (event) => {
    event.preventDefault()
    ourText = textInputField.value
    utterThis.text = ourText
    synth.speak(utterThis)
    props.showAlert("Voicing the Text","success");
    }

    const handelUPclick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","success");

    }
    const handelLOclick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","success");

    }
    const handelClear = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Cleared the text","success");
    }
    const removeExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces","success");
    }
    const handelONchange = (event)=>{
        setText(event.target.value);
    }
    const [text,setText] = useState('');
  return (
    // because we can render only one thing
    <>
    <div className='container' style={{color : props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handelONchange} id="mybox" rows="8"></textarea>
            <button disabled={text.length === 0} className='btn btn-primary my-2 mx-1' onClick={handelUPclick}>Convert To Uppercase</button>
            <button disabled={text.length === 0} className='btn btn-primary my-2 mx-1' onClick={handelLOclick}>Convert To Lowercase</button>
            <button disabled={text.length === 0} className='btn btn-primary my-2 mx-1' onClick={handelClear}>Clear</button>
            <button disabled={text.length === 0} className='btn btn-primary my-2 mx-1' onClick={removeExtraSpaces}>Remove Extra Space</button>
            <button disabled={text.length === 0} className='btn btn-primary my-2 mx-1' onClick={handelSpeaking}>Voice the Text</button>
        </div>
    </div>
    <div className="container" style={{color : props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length-1} words and {text.length} caracters</p>
        <p>{0.008 * (text.split(" ").length-1) } Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview!!"}</p>
    </div>
    </>
  )
}
