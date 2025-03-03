import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Inventory.css';



const Testrows = [
  {
    barcode: 123456,
    supplier_code: "908100020",
    name: "ESTILETE ENDOTRAQUEAL FR 10 (M)",
    expire_date: "2024-12-31",
    quantity: 70
  },
  {
    barcode: 456789,
    supplier_code: "102150010",
    name: "MASCARA LARINGEA LMA PROSEAL Nº1 R",
    expire_date: "2025-01-05",
    quantity: 130
  },
  {
    barcode: 4587954,
    supplier_code: "2407043100",
    name: "ROLLO TYVEK 10CMX70MT STERITEK",
    expire_date: "",
    quantity: 35
  },
  {
    barcode: 54658912,
    supplier_code: "800HDP",
    name: "POSICIONADOR DE CABEZA VITAL SIGNS DESECH CJX6 UD",
    expire_date: "",
    quantity: 5
  },
]


const InventoryMain = () => {

  return (
   <div>
    <TableContainer>
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell className='headerText'>Código barras</TableCell>
          <TableCell className='headerText'>Código proveedor</TableCell>
          <TableCell className='headerText'>Descripción</TableCell>
          <TableCell className='headerText'>Fecha vencimiento</TableCell>
          <TableCell className='headerText'>Cantidad</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Testrows.map((row, index) => (
          <TableRow key={index}>
            <TableCell></TableCell>
            <TableCell>{row.barcode}</TableCell>
            <TableCell>{row.supplier_code}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.expire_date}</TableCell>
            <TableCell>{row.quantity}</TableCell>
            <TableCell></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
   </div>
  )
}


export default InventoryMain;