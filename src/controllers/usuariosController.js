import Usuarios from "../models/Usuarios.js";

export const renderUsuario = async(req, res) => {
  const usuarios = await Usuarios.find().lean()
  res.render("index", {usuarios: usuarios});
}

export const createUsuario= async (req,res) =>{
  try {
    const usuarios = Usuarios(req.body)
    await usuarios.save()
    res.redirect("/");
  } catch (error) {
    console.log(error)
  }
}

export const renderEditUsuario = async(req, res) => {
  try {
    const usuarios = await Usuarios.findById(req.params.id).lean()
    res.render("editar", {usuarios});
  } catch (error) {
    console.log(error.message)
  }
}

export const updateUsuario = async (req, res) =>{
  const {id} = req.params
  await Usuarios.findByIdAndUpdate(id, req.body)

  res.redirect("/")
}
export const deleteUsuario = async (req, res) =>{
  const {id} = req.params
  await Usuarios.findByIdAndDelete(id)

  res.redirect("/")
}

export const statusUsuario = async (req, res) =>{
  const {id} = req.params
  const usuarios = await Usuarios.findById(id)
  usuarios.opcion = !usuarios.opcion
  await usuarios.save()
  res.redirect("/")
}