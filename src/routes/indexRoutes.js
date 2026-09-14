import { Router } from "express";
import Productos from '../models/Productos.js'
import { createProductos, deleteProductos, renderEditProducto, renderProductos, statusProductos, updateProductos } from "../controllers/productoController.js";
import Usuarios from "../models/Usuarios.js";
import { createUsuario, deleteUsuario, renderEditUsuario, renderUsuario, statusUsuario, updateUsuario } from "../controllers/usuariosController.js";



const router = Router();

router.get("/", renderProductos);

router.post("/productos/agregar", createProductos)

router.get("/productos/:id/update", renderEditProducto);

router.post("/productos/:id/update", updateProductos)

router.get("/productos/:id/delete", deleteProductos)

router.get("/productos/:id/status", statusProductos)


router.get("/", renderUsuario);

router.post("/usuarios/agregar", createUsuario)

router.get("/usuarios/:id/update", renderEditUsuario);

router.post("/usuarios/:id/update", updateUsuario)

router.get("/usuarios/:id/delete", deleteUsuario)

router.get("/usuarios/:id/status", statusUsuario)



export default router;