import React, { useState } from 'react'
import "./Navbar.css"
// import { SketchPicker } from 'react-color'
import ColorLensIcon from '@mui/icons-material/ColorLens';

function Navbar() {
  const [show , setShow] = useState(false)
  const [ currectColor , setCurrentcolor] = useState("#0000009b")

  const handleChangeComplete = (color) => {
    setCurrentcolor(color.hex)
    console.log(color)
  };

  const handleColor = (e)=>{
    e.preventDefault()
    if(show === false){
      setShow(true)
    }
    else{
      setShow(false)
    }
  }
  const appStyle ={
    backgroundColor : currectColor,
  }
  return (
    <div className='head'style={appStyle}>
        <h2>Todo List</h2>
        <ul className='list' >
            <li><a href='' onClick={handleColor}><ColorLensIcon /></a></li>
            {
              show ? <span className='color-sheet'>

                {/* <SketchPicker
               color={currectColor}
               onChangeComplete={ handleChangeComplete }
             /> */}
              </span> : ""
            }

            <li><a href=''>Search</a> </li>
            <li><a href=''>Rename</a> </li>
        </ul>
    </div>
  )
}

export default Navbar
