import React from 'react'
export default function About(props) {


    let myStyle = {
        color : props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'#262C2A':'white'
    }

  return (
    <div className='container' style={myStyle}>
    <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                This WebSite
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>TextMod.</strong>TextMod is a word counter,text counter and voicing text utility which is used to perform these operations on a Text which is Entered by You.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                Voice Your Entered Text
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>Voice Text Button.</strong>This Button lets you to hear the text in which is given by you.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                Extra Spaces
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>Remove Extra Spaces Button.</strong>This button allows you to Remove any Extra spaces which might have been given during writing of the Text.
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
