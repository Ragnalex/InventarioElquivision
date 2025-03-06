import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

import "./modaladdstock.css";




const ModalAddStock = (props) => {


  return(
    <div className="modalContainer">
      <div className="textContainer">
        <div className="textrow">
            <TextField className="textInputs" id="outlined-basic" label="Código Proveedor" variant="outlined" /> 
            <TextField className="textInputs" id="outlined-basic" label="Nombre Producto" variant="outlined" />
        </div>
        <div className="textrow">
            <TextField className="textInputs" id="outlined-basic" label="Fecha Vencimiento" variant="outlined" /> 
            <TextField className="textInputs" id="outlined-basic" label="Cantidad" variant="outlined" />
        </div>
        <Button variant="contained" style={{marginTop: "50px"}}> Aplicar </Button>
      </div>
    </div>
  )

}


export default ModalAddStock;