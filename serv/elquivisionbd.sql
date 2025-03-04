CREATE TABLE Insumo (
  id_insumo SERIAL PRIMARY KEY,
  bar_code TEXT,
  proveedor TEXT,
  supplier_code TEXT NOT NULL,
  descripcion TEXT NOT NULL
);


CREATE TABLE InventarioInsumos (
  id_inventario SERIAL PRIMARY KEY,
  id_insumo INT,
  exp_date DATE,
  QUANTITY, INT,
  CONSTRAINT insumo_inventario_fkey FOREIGN KEY (id_insumo) REFERENCES Insumo(id_insumo)
);