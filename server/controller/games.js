import express from 'express';
// import {Op} from "sequelize" // importuojam operatorius paieskai DB

import database from '../database/connect.js';
import upload from '../middleware/multer.js';


const router = express.Router();

router.post("/", upload.single("") ,async (req,res)=>{
    try {
        if(req.file)
            req.body.image = "/uploads/"+req.file.filename
        new db.Posts(req.body).save()
        res.send("Įrašas sėkmingai sukurtas")
    } catch {
        res.status(500).send("Įvyko serverio klaida")
    }
    

})


export default router