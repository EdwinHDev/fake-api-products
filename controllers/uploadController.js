import {deleteAsync} from 'del'
import dotenv from "dotenv"
import { existsSync, mkdirSync } from "fs"

dotenv.config()

export const uploadFile = async (req, res) => {

  const uploadDir = './uploads';

  // Verificar si el directorio de carga existe
  if (!existsSync(uploadDir)) {
    // Si no existe, intenta crearlo
    try {
      mkdirSync(uploadDir);
      console.log('Directorio de carga creado correctamente.');
    } catch (err) {
      console.error('Error al crear el directorio de carga:', err);
    }
  }

  // Verificar si se enviaron archivos
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: 'No se han enviado archivos.' });
  }

  // Array donde almacenaremos las URLs de las imágenes cargadas
  const urls = [];

  // Iteramos sobre los archivos cargados y construimos las URLs
  req.files.forEach(file => {
    urls.push(req.protocol + '://' + req.get('host') + '/uploads/' + file.filename);
  });

  // Devolvemos las URLs al usuario
  res.json({ urls: urls });
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
