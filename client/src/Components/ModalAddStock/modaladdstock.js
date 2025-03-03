import React, {useState} from "react";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import { Modal } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";




const ModalAddStock = (props) => {


  return(
    <div style={{display:"flex", flexDirection:"column"}}>
      <div style={{display:"flex", flexDirection:"row"}}>
          <TextField id="outlined-basic" label="Código Proveedor" variant="outlined" /> 
          <TextField id="outlined-basic" label="Nombre Producto" variant="outlined" />
      </div>
      <div style={{display:"flex", flexDirection:"row"}}>
          <TextField id="outlined-basic" label="Fecha Vencimiento" variant="outlined" /> 
          <TextField id="outlined-basic" label="Cantidad" variant="outlined" />
      </div>
      <Button variant="contained" style={{marginTop: "50px"}}> Aplicar </Button>
    </div>
  )

}


export default ModalAddStock;