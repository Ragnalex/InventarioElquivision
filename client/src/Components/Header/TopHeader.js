import React from "react";
import './TopHeader.css'
import LogoElquivision from '../../Imgs/Logo.png'
import Button from '@mui/material/Button'



const TopHeader = (props) => {

  return (
    <div className="Headercontainer">
      <img className="imgStyle" src={LogoElquivision}></img>
      <div className="tittle">{props.tittle}</div>
    </div>
  )
}


export default TopHeader;