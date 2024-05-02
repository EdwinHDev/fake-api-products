import dotenv from "dotenv"

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