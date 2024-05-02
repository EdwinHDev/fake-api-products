import {deleteAsync} from 'del'
import dotenv from "dotenv"
import { existsSync } from "fs"

dotenv.config()

export const uploadFile = async (req, res) => {

  const types = ["image/png", "image/jpeg", "image/jpg"]

  if(!req.files) {
    return res.status(400).json({ error: true, message: "Debes seleccionar un archivo" })
  }

  if(req.files.image.length > 0) {
    console.log("entro en array")
    for (let i = 0; i < req.files.image.length; i++) {
      if(!types.includes(req.files.image[i].mimetype)) {
        return res.status(401).json({ error: true, message: "Solo se permiten formatos de archivos png, jpg y jpeg" })
      }
    }
  } else {
    console.log("entro en objeto")
    if(!types.includes(req.files.image.mimetype)) {
      return res.status(401).json({ error: true, message: "Solo se permiten formatos de archivos png, jpg y jpeg" })
    }
  }

  if(req.files.image.length > 0) {
    let resArr = []
    for (let i = 0; i < req.files.image.length; i++) {
      req.files.image[i].mv("./uploads/"+req.files.image[i].name)
      resArr.push({
        name: req.files.image[i].name,
        size: req.files.image[i].size,
        type: req.files.image[i].mimetype,
        url: process.env.BASE_URL+"/"+req.files.image[i].name
      })
    }
    res.json(resArr)
  } else {
    let file = req.files.image
    file.mv("./uploads/"+file.name)

    res.json({
      name: file.name,
      size: file.size,
      type: file.mimetype,
      url: process.env.BASE_URL+"/"+file.name
    })
  }
}

export const deleteFile = async (req, res) => {

  const { name } = req.params

  if(!existsSync(`uploads/${name}`)) {
    return res.status(401).json({ message: "No existe ese archivo" })
  }

  try {
    await deleteAsync(['uploads/*', `!${name}`]);
    res.json({ message: "Archivo eliminado correctamente" })
  } catch (error) {
    return res.status(500).json({ message: "Algo salio mal" })
  }
}
