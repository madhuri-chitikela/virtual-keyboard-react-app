import React from 'react';
import {useState} from 'react';
import HeaderComponent  from './HeaderComponent';
import KeyboardCard  from './KeyboardCard';

export default function VirtualKeyboardApp(){
    const [paragraph, setParagraph] = useState("")
    //const [clear, setClear] = useState("")
    const handleKeyboardClick=(char)=>{
        setParagraph(paragraph+char)
        //setClear("")
    }
    const handleKeyboardClick1=()=>{
        setParagraph("")
    }
    const handleKeyboardClick2=(char)=>{
        setParagraph(paragraph=-paragraph)
        
    }
    return(
        <div>
            <div>
              <HeaderComponent />
            </div>
            <div class="d-flex justify-content-center" style={{background: 'lightgreen', margin:'20px', height:'50px'}}>
              <h2>{paragraph}</h2> 
              </div>
              <div class="d-flex justify-content-center" style= {{margin:50}}>
              <KeyboardCard
                handleKeyboardClick={handleKeyboardClick}
                handleKeyboardClick1={handleKeyboardClick1}
                handleKeyboardClick2={handleKeyboardClick2}
              />
              
            </div>
        </div>
    );
}
