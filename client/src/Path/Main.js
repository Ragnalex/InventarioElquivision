import React from "react";
import InventoryMain from "../Components/InventoryTable/Inventory";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "./Main.css";
import TopHeader from "../Components/Header/TopHeader";


const Main = () => {

  const navigate = useNavigate();

  return (
    <div className="mainbody">
      <header>
        <TopHeader tittle="Menú Principal"/>
      </header>
      <div className="container">
        <Button variant="contained" className="buttonblock" onClick={() => navigate("/Insumos")}>Inventario Insumos</Button>
        <Button variant="contained" color="success" className="buttonblock" onClick={()=> navigate("/Lentes")}>Inventario Lentes</Button>
      </div>
    </div>
    
  )

}

export default Main;