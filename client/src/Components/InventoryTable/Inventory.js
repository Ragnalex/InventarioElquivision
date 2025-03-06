import React, {useEffect, useState} from 'react';
import {TableBody, Table, TableCell, TableHead, TableRow } from '@mui/material';
import axios from 'axios';

import './Inventory.css';

const InventoryMain = () => {

  const [insumos, setinsumos] = useState([])
  
  const getDataInsumos = async () => {
    try {
      const res = await axios.get("http://192.168.0.166:5000/api/insumos/data");
      setinsumos(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => getDataInsumos, [])


  return (
    <div>
      <div style={{ height: 400, width: '100%' }}>
          {/*<DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            disableSelectionOnClick
          />*/}
          <Table>
            <TableHead>
              <TableCell>ID</TableCell>
              <TableCell>Proveedor</TableCell>
              <TableCell>Código Proveedor</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Fecha Expiración</TableCell>
              <TableCell>Cantidad</TableCell>
            </TableHead>
            <TableBody>
              {insumos.map( (insumo, index) => {
                return(
                  <TableRow key={insumo.id_inventario}>
                    <TableCell>{insumo.id_inventario}</TableCell>
                    <TableCell>{insumo.proveedor}</TableCell>
                    <TableCell>{insumo.supplier_code}</TableCell>
                    <TableCell>{insumo.descripcion}</TableCell>
                    <TableCell>{insumo.exp_date ? new Date(insumo.exp_date).toLocaleDateString("es-CL"): ""}</TableCell>
                    <TableCell>{insumo.quantity}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
    </div>
  )
}


export default InventoryMain;