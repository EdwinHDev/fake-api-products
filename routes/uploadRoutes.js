import express from "express"
import multer from "multer"
import path from "path";
import { uploadFile, deleteFile } from "../controllers/uploadController.js"
import { existsSync, mkdirSync } from "fs"

const router = express.Router()

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

// Configuración de Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    // Genera un nombre de archivo único
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    // Solo acepta imágenes con las siguientes extensiones
    const filetypes = /jpeg|jpg|png|webp/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb('Error: Solo se permiten imágenes jpeg, jpg, png, webp.');
    }
  },
  limits: { fileSize: 5 * 1024 * 1024, files: 6 } // Máximo 6 imágenes y 5MB por imagen
});

router.post("/",  upload.array('images', 6), uploadFile)
router.get("/delete/:name", deleteFile)

export default router