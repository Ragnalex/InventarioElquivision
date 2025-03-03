import React, {useState} from "react";
import InventoryMain from "../../Components/InventoryTable/Inventory";
import { Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Stack, Modal } from "@mui/material";
import TopHeader from "../../Components/Header/TopHeader";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';


import "./Insumos.css"
import ModalAddStock from "../../Components/ModalAddStock/modaladdstock";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Insumos = () => {

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);


  return (
    <div className="InsumosPage">
      <header>
        <TopHeader tittle="Inventario Insumos"/>
      </header>
      <div className="insumosHeader">
        <Button variant="contained" className="buttonStyle" onClick={() => navigate("/")}>Volver</Button>
        <Stack spacing={2} direction={"row"}>
        <Button variant="contained" color="success" className="buttonStyle" onClick={() => setOpen(true)}>Añadir productos</Button>
        <Button variant="contained" color="error" className="buttonStyle">Reducir Stock</Button>
        </Stack>
      </div>

      <div>
        <Modal 
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-tittle"
          aria-describedby="modal-modal-description">

        <Box className="addModalStyle">
         {<ModalAddStock/>}
        </Box>

        </Modal>
      </div>
       
      <div className="TableContainer">
        <div className="containerInsumos">
          <h4>
            Tabla de Insumos
          </h4>
          <div>
            {<InventoryMain/>}
          </div>
        </div>
      </div>
    </div>
  )
}


export default Insumos;