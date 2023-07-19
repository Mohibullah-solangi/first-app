import React, { useState } from "react";

export default function Textform(props) {
  const handleUpclick = () => {
    console.log("You clicked" + text);
    let newtext = text.toUpperCase();
    settext(newtext);
    props.show("Converted to Uppercase!", "success");
  };
  const handlelowclick = () => {
    console.log("You clicked" + text);
    let newtext = text.toLowerCase();
    settext(newtext);
    props.show("Converted to lowercase!", "success");
  };
  const handleonchange = (event) => {
    // settext=(event.target.value)
    console.log("Changed");
    settext(event.target.value);
  };
  const [text, settext] = useState("");

  return (
    <>
    <div className="container">
      <h1 style={{color: props.mode === "light" ? "black" : "white"}}>{props.heading} </h1>
      <textarea
        name=""
        id=""
        value={text}
        onChange={handleonchange}
        cols="180"
        rows="10" style={{backgroundColor: props.mode === "light" ? "white" : "rgb(186 186 186)", color: props.mode === "light" ? "black" : "white"}}
      ></textarea>

      <button className="btn btn-primary mx-1" onClick={handleUpclick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handlelowclick}>
        Covert to Lowercase
      </button>
    </div>
     
       <div className="container my-4">
        <h1 style={{color: props.mode === "light" ? "black" : "white"}}>Your Text summary</h1>
        <p style={{color: props.mode === "light" ? "black" : "white"}}>
          {text.split(" ").length} word, {text.length} characters
        </p>
        <h2 style={{color: props.mode === "light" ? "black" : "white"}}>Preview</h2>
        <p style={{color: props.mode === "light" ? "black" : "white"}}>
          {text.length>0?text: "Enter something in the Textbox above to preview it here"}
        </p>
       </div>

    </>
  );
}
