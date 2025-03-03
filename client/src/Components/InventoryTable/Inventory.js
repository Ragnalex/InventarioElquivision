import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';

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
    width: 130,
    editable: true,
  },
  {
    field: 'quantity',
    headerName: 'Cantidad',
    type: 'number',
    editable: true,
    width: 100,
  },
];


const Testrows = [
  {
    barcode: 123456,
    id: "908100020",
    name: "ESTILETE ENDOTRAQUEAL FR 10 (M)",
    expire_date: "2024-12-31",
    quantity: 70
  },
  {
    barcode: 456789,
    id: "102150010",
    name: "MASCARA LARINGEA LMA PROSEAL Nº1 R",
    expire_date: "2025-01-05",
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

  return (
    <div>
      <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={Testrows}
            columns={columns}
            pageSize={5}
            disableSelectionOnClick
          />
        </div>
    </div>
  )
}


export default InventoryMain;