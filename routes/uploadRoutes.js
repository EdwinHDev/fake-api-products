import express from "express"
import { uploadFile, deleteFile } from "../controllers/uploadController.js"

const router = express.Router()

router.post("/", uploadFile)
router.get("/delete/:name", deleteFile)

export default router