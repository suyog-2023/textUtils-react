import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to uppercase","success");
    }
    const handleLoClick = () => {
        // console.log("Uppercase was clicked" + text)
        let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase","success");
      
    }
    const handleClearClick = () => {
        // console.log("Uppercase was clicked" + text)
      let newText = '';
      setText(newText)
      props.showAlert("Deleted","success");
      
  }
  
  function add() {
    let newText = text + "euu";
    setText(newText);
    props.showAlert("Successfully added a word","success");

  }
  
  //copy string

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied","success");

  }


    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState("");
  return (
    <>
    <div className="container"style={{ color: props.mode === 'success' ? 'white' : 'black' ,color: props.mode === 'dark' ? 'white' : 'black'}}>
          <h2 >{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#3d4043':'white',color:props.mode==='dark'?'white':'black', backgroundColor:props.mode==='success'?'#green':'white',color:props.mode==='success'?'black':'black'}} id="myBox" rows="8"></textarea>
            </div>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase </button>
          <button className="btn btn-warning mx-1" onClick={handleLoClick}>Convert to Lowercase </button>
          <button className="btn btn-danger mx-1" onClick={handleClearClick}>Clear</button>
          <button className="btn btn-info mx-1" onClick={add}>Add</button>
          <button className="btn btn-secondary mx-1" onClick={handleCopy}>Copy</button>
      </div>  
      <div className="container-fluid my-5"style={{ color: props.mode === 'success' ? 'white' : 'black' ,color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>Your Text Summary</h2> 
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to Read</p>
        <h3>Preview</h3>
        <mark>{text.length>0?text:"Enter Something in the text box to preview it here"}</mark>
      </div>
    </>
  )
}