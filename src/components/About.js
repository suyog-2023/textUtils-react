import React, {useState} from 'react'

export default function About(props) {

  const [myStyle, setMyStyle] = useState({
      
    color: 'black',
    backgroundColor: 'white',    
  })
  const [btnText, setbtnText] = useState("Enable dark mode")

  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
        border:'1px solid white'
    
      })
      setbtnText("Enable Light Mode");
    }
    else {
      setMyStyle({
        color: 'white',
    backgroundColor:'black'
      })
      setbtnText("Enable dark Mode")

    }
  }

  return (
    <>
      <hr />
      <div className="container my-4 p-4" style={{ color: props.mode === 'success' ? 'white' : 'black' ,color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1 className='my-4'>About us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
          <div className="accordion-item"style={myStyle}>
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{myStyle, backgroundColor:props.mode==='dark'?'#3a2e2f':'white', color:props.mode==='dark'?'white':'black'}}>
                Accordion Item #1
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body"style={{myStyle,backgroundColor:props.mode==='dark'?'#3a2e2f':'white', color:props.mode==='dark'?'white':'black'}} >
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" style={{myStyle,backgroundColor:props.mode==='dark'?'#3a2e2f':'white', color:props.mode==='dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={{myStyle,backgroundColor:props.mode==='dark'?'#3a2e2f':'white', color:props.mode==='dark'?'white':'black'}}>
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" style={{myStyle,backgroundColor:props.mode==='dark'?'#3a2e2f':'white', color:props.mode==='dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body"style={{myStyle,backgroundColor:props.mode==='dark'?'#3a2e2f':'white', color:props.mode==='dark'?'white':'black'}}>
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
      <div className="container">
        {/* <button onClick={toggleStyle} className="btn btn-success my-4"><i className='fa fa-lightbulb-o'></i></button> */}
        <button onClick={toggleStyle} className="btn btn-success my-4">{btnText}</button>
      </div>
      </div>
      <br /><br /><br />
    </>
  )
}
