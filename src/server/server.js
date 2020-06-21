const express = require("express");
const server = express();
const cors = require("cors");
const pool = require("./Connection");

//middleware
server.use(cors());
server.use(express.json()); //req.body
//ROUTES//

//create a todo
server.post("/mascotas", async (req, res) => {
  try {
    const { nombre } = req.body.nombrem;
    const { edad } = req.body.edadm;
    const { id } = req.body.idm;
    const { sexo } = req.body.sexom;
    const { color } = req.body.colorm;
    const { especie } = req.body.especiem;
    const { raza } = req.body.razam;
    const { numcartilla } = req.body.numcartillam;
    const { fechanacimiento } = req.body.fechanacimientom;
    const { propietario } = req.body.propietariom;

    const insert = await pool.query(
      "INSERT INTO mascotas (idmascota, nombremascota, sexo, color, especie, raza, numcartilla, fechanacimiento, edad, propietario) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *",
      [id,nombre,sexo,color,especie,raza,numcartilla,fechanacimiento,edad,propietario]
    );

    res.json(insert.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
//get all todos
server.get("/mascotas", async (req, res) => {
  try {
    const getAll = await pool.query("SELECT * FROM mascotas");
    res.json(getAll.rows);
    console.log(res);
  } catch (err) {
    console.error(err.message);
  }
});

//get a todo

server.get("/mascotas/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getById = await pool.query("SELECT * FROM mascotas WHERE idmascota = $1", [id]);

    res.json(getById.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update a todo

server.put("/mascotas/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body.nombrem;
    const { edad } = req.body.edadm;
    const { sexo } = req.body.sexom;
    const { color } = req.body.colorm;
    const { especie } = req.body.especiem;
    const { raza } = req.body.razam;
    const { numcartilla } = req.body.numcartilla;
    const { fechanacimiento } = req.body.fechanacimiento;
    const { propietario } = req.body.propietario;
    const update = await pool.query(
      "UPDATE mascotas SET nombremascota = $1,sexo = $2,color = $3,especie = $4 ,raza = $5,numcartilla = $6,fechanacimiento = $7,edad = $8,propietario = $9 WHERE idmascota = $10",
      [nombre,sexo,color,especie,raza,numcartilla,fechanacimiento,edad,propietario,id]
    );
    res.json("Todo was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

//delete
server.delete("/mascotas/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM mascotas WHERE idmascota = $1", [id]);
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});
//*****************************Clientes**********************/
server.post("/clientes", async (req, res) => {
  try {
    const { id } = req.body.idc;
    const { nombre } = req.body.nombrec;
    const { direccion } = req.body.direccionc;
    const { telefono } = req.body.telefonoc;
    const { celular } = req.body.celularc;
    const { correo } = req.body.correoc;
    const insert = await pool.query(
      "INSERT INTO clientes (idcliente,nombrecliente,direccion,telefono,celular,correo) VALUES($1,$2,$3,$4,$5,$6) RETURNING *",
      [id,nombre,direccion,telefono,celular,correo]);
    res.json(insert.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
//get all todos
server.get("/clientes", async (req, res) => {
  try {
    const getAll = await pool.query("SELECT * FROM clientes");
    res.json(getAll.rows);
    console.log(res);
  } catch (err) {
    console.error(err.message);
  }
});

//get a todo

server.get("/clientes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getById = await pool.query("SELECT * FROM clientes WHERE idcliente = $1", [id]);

    res.json(getById.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update a todo

server.put("/clientes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body.nombrec;
    const { direccion } = req.body.direccion;
    const { telefono } = req.body.telefono;
    const { celular } = req.body.celular;
    const { correo } = req.body.correo;
    const update = await pool.query(
      "UPDATE clientes SET nombrecliente = $1,direccion = $2,telefono = $3,celular = $4,correo = $5 WHERE idcliente = $6",
      [nombre,direccion,telefono,celular,correo,id]
    );
    res.json("Todo was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

//delete
server.delete("/clientes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM clientes WHERE idcliente = $1", [id]);
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});
server.listen(5000, () => {
  console.log("server has started on port 5000");
});