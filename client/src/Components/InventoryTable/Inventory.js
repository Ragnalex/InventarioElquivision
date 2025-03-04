import React, {useEffect, useState} from 'react';
import {TableBody, Table, TableCell, TableHead, TableRow } from '@mui/material';
import axios from 'axios';

import './Inventory.css';


const columns = [
  { field: 'barcode', headerName: 'Código Barras', width: 150 },
  {
    field: 'id',
    headerName: 'Código Proveedor',
    width: 150,
    editable: true,
  },
  {
    field: 'name',
    headerName: 'Descripción',
    width: 500,
    editable: true,
  },
  {
    field: 'expire_date',
    headerName: 'Fecha Expiración',
    type: 'date',
    width: 130,
    editable: true,
    valueGetter: (value) => value && new Date(value)
  },
  {
    field: 'quantity',
    headerName: 'Cantidad',
    type: 'number',
    editable: true,
    width: 130,
  },
];


const Testrows = [
  {
    barcode: 123456,
    id: "908100020",
    name: "ESTILETE ENDOTRAQUEAL FR 10 (M)",
    expire_date: "31/12/2024",
    quantity: 70
  },
  {
    barcode: 456789,
    id: "102150010",
    name: "MASCARA LARINGEA LMA PROSEAL Nº1 R",
    expire_date: "05/01/2024",
    quantity: 130
  },
  {
    barcode: 4587954,
    id: "2407043100",
    name: "ROLLO TYVEK 10CMX70MT STERITEK",
    expire_date: "",
    quantity: 35
  },
  {
    barcode: 54658912,
    id: "800HDP",
    name: "POSICIONADOR DE CABEZA VITAL SIGNS DESECH CJX6 UD",
    expire_date: "",
    quantity: 5
  },
]



const InventoryMain = () => {

  const [insumos, setinsumos] = useState([])
  
  const getDataInsumos = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/insumos/data");
      setinsumos(res.data);
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
                    <TableCell>{new Date(insumo.exp_date).toLocaleDateString("es-CL")}</TableCell>
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