import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { useState } from 'react';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import data from "./buttonsList.json";

export default function KeyboardCard({handleKeyboardClick,handleKeyboardClick1,handleKeyboardClick2}) {
    //const [clear,setClear] = useState("")
    const handleClick = (e) => {
        console.log(e.target.value)
        handleKeyboardClick(e.target.value)
        //console.log(setClear(""))
        //setParagraph("")
    }
    const handleClick1 = (e) => {
        //console.log(e.target.value)
        handleKeyboardClick1(e.target.value)
    }
    const handleClick2 = (e) => {
        //console.log(e.target.value)
        handleKeyboardClick2(e.target.value)
    }
    return (
            <Card>
                <div style={{background:"brown", width: 250}}>
                {
                    data.buttonsList.map((item) => {
                        return (
                            <button
                                style={{width: 30}}
                                type="button"
                                className='btn btn-primary m-1'
                                onClick={handleClick}
                                value={item.value}
                            >
                                {item.value}
                            </button>

                        );
                    })
                }
                            <button
                                type="button"
                                className='btn btn-primary m-1'
                                onClick={handleClick1}
                                value=""
                            >
                                Clear
                            </button>
                </div>
            </Card>
        
    );
}


        