import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Modal from "@mui/material";

import "./lentes.css";
import TopHeader from "../../Components/Header/TopHeader";


const Lentes = () => {
  const navigate = useNavigate();

  return(
    <div>
      <header>
        <TopHeader tittle="Inventario Lentes"/>
      </header>
      <div style={{color: "black"}}>
        <Button variant="contained" className="buttonStyle" onClick={() => navigate("/")}>Volver</Button>
        AQUI PROXIMAMENTE INVENTARIO LENTES
      </div>
    </div>
  )

}

export default Lentes;