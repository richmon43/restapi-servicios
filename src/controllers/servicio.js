import Servicio from "../models/Servicio";
import { getPagination } from "../libs/getPaginaation";

export const findAllServicios = async (req, res) => {
  try {
    const { size, page, title } = req.query;
    const condition = title
      ? {
          title: { $regex: new RegExp(title), $options: "i" },
        }
      : {};
    const { limit, offset } = getPagination(page, size);
    const data = await Servicio.paginate(condition, { offset, limit });
    res.json({
      totalItems: data.totalDocs,
      servicios: data.docs,
      totalPages: data.totalPages,
      currentPage: data.page - 1,
    });
  } catch (error) {
    res.status(500).json({
      msg: error.msg || "Ocurrio algo inesperado",
    });
  }
};

export const createServicio = async (req, res) => {
  if (!req.body.title) {
    return res.status(400).send({
      msg: "El campo de titulo es obligatorio",
    });
  }
  try {
    const newServicio = new Servicio({
      title: req.body.title,
      entity: req.body.entity,
      city: req.body.city,
      value: req.body.value,
      status: req.body.status ? req.body.status : false,
    });
    const serviceSaved = await newServicio.save();
    res.json(serviceSaved);
  } catch (error) {
    res.status(500).json({
      msg: error.msg || "No se pudo crear el servicio",
    });
  }
};

export const findOneServicio = async (req, res) => {
  const { id } = req.params;
  try {
    const servicio = await Servicio.findById(id);
    if (!servicio)
      return res
        .status(404)
        .json({ msg: `El servicio con id: ${id} no existe` });
    res.json(servicio);
  } catch (error) {
    res.status(500).json({
      msg: error.msg || `Error recibiendo el servicio con id: ${id}`,
    });
  }
};

export const deleteServicio = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Servicio.findByIdAndDelete(id);
    res.json({
      msg: `El servicio de ${data.title} fue eliminado correctamente`,
    });
  } catch (error) {
    res.status(500).json({
      msg: `No se pudo eliminar el servicio`,
    });
  }
};

export const findAllStatusServicios = async (req, res) => {
  const servicios = await Servicio.find({ status: true });
  res.json(servicios);
};

export const updateServicio = async (req, res) => {
  const updatedTask = await Servicio.findByIdAndUpdate(req.params.id, req.body);
  res.json({ msg: "Servico actualizado correctamente" });
};
