import {deleteAsync} from 'del'
import dotenv from "dotenv"
import { existsSync } from "fs"

dotenv.config()

export const uploadFile = async (req, res) => {

  const types = ["image/png", "image/jpeg", "image/jpg", "image/webp"]
  const validImages = (mimetype) => {
    return types.includes(mimetype)
  };

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({ error: 'No se recibieron imagenes' });
  }

  let resArr = []
  for (let nameField in req.files) {
    const images = Array.isArray(req.files[nameField]) ? req.files[nameField] : [req.files[nameField]];

    images.forEach(file => {
      if (!validImages(file.mimetype)) {
        return res.status(400).json({ error: 'El archivo no es una imagen PNG, WEBP, JPG o JPEG' });
      }

      file.mv("./uploads/"+file.name)

      resArr.push({
        name: file.name,
        size: file.size,
        type: file.mimetype,
        url: process.env.BASE_URL+"/"+file.name
      })
    });
  }

  return res.json(resArr)
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
