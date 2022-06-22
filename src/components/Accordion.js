import React, { useState } from "react"
import "./Accordion.css"
import Chevron from "./Chevron"


export default function Accordion(props){

    const [activeState, setActiveState] = useState("");
    const [height, setHeight] = useState("0px");

    const content = React.useRef(null);
    
    function toggle(){
        setActiveState(prevState => prevState === ""? "active": "");
        setHeight(activeState==="active"? "0px" : `${content.current.scrollHeight}px`);
    }

    

    return (
        <div className="accordion--fullsection">
            <button onClick={toggle} className={`accordion ${activeState}`}>
                <p className="accordion--title">{props.title}</p>
                <Chevron width={10} />
                <img 
                src="/images/chevron-right.svg" 
                className={`accordion--icon ${activeState==""? "": "rotate"}`} />
            </button>
            <div ref={content} style={{maxHeight: `${height}`}} className="accordion--content">
                <div 
                className="accordion--text" 
                dangerouslySetInnerHTML={{__html: props.content}}
                />
            </div>
        </div>
    )
}