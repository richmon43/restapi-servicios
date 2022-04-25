import { Router } from "express";
import * as servicioCtrl from "../controllers/servicio";
const router = Router();

// Crear un  servicio
router.post("/", servicioCtrl.createServicio);

// Obtener todos los servicios
router.get("/", servicioCtrl.findAllServicios);

// Obtener los servicios con status: true
router.get("/status", servicioCtrl.findAllStatusServicios);

// Obtener un solo servicio (id)
router.get("/:id", servicioCtrl.findOneServicio);

// Eliminar un servicio (id)
router.delete("/:id", servicioCtrl.deleteServicio);

// Actualizar servico
router.put("/:id", servicioCtrl.updateServicio);

export default router;
