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
                <div style={{background:"red", width: 250}}>
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
                                onClick={handleClick2}
                                value="-1"
                            >
                                BackSpace
                            </button>
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


        //     <div>

        //         <Card>
        //             <form onSubmit={handleClick}>
        //                 <label>Input</label>
        //                 <input
        //                    type="keyboard"
        //                    value={name}
        //                    onChange={(e)=> setName(e.target.value)
        //                 }
        //                 />

        //         <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
        //       <ButtonGroup className="me-2" aria-label="First group">
        //       <Button variant="secondary" onClick={handleClick} value="A">A</Button>{' '}
        //       <Button variant="secondary" onClick={handleClick} value="B">B</Button>{' '}
        //       <Button variant="secondary" onClick={handleClick} value="C">C</Button>{' '}
        //       <Button variant="secondary" onClick={handleClick} value="D">D</Button>{' '}
        //       <Button variant="secondary" onClick={handleClick} value="E">E</Button>
        //       </ButtonGroup>
        //       </ButtonToolbar>
        //       </form>
        //         </Card>
        //         <p>{name}</p>
        //     </div>