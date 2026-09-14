import Usuarios from "../models/Usuarios.js";

export const renderUsuario = async(req, res) => {
  const usuarios = await Usuarios.find().lean()
  res.render("usuarios/usuarios", {usuarios: usuarios}); 
}

export const createUsuario = async (req,res) =>{
  try {
    const nuevoUsuario = new Usuarios(req.body)
    await nuevoUsuario.save()
    res.redirect("/usuarios");
  } catch (error) {
    console.log(error)
  }
}

export const renderEditUsuario = async(req, res) => {
  try {
    const usuarios = await Usuarios.findById(req.params.id).lean()
    res.render("usuarios/editar", {usuarios});
  } catch (error) {
    console.log(error.message)
  }
}

export const updateUsuario = async (req, res) =>{
  const {id} = req.params
  await Usuarios.findByIdAndUpdate(id, req.body)
  res.redirect("/usuarios")
}

export const deleteUsuario = async (req, res) =>{
  const {id} = req.params
  await Usuarios.findByIdAndDelete(id)
  res.redirect("/usuarios")
}

export const statusUsuario = async (req, res) =>{
  const {id} = req.params
  const usuarios = await Usuarios.findById(id)
  usuarios.opcion = !usuarios.opcion 
  await usuarios.save()
  res.redirect("/usuarios")
}