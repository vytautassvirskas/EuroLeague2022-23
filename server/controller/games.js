import express from 'express';
// import {Op} from "sequelize" // importuojam operatorius paieskai DB

import db from '../database/connect.js';



const router = express.Router();

router.post("/",async (req,res)=>{
    try {
        new db.Games(req.body).save()
        res.send("Įrašas sėkmingai sukurtas")
    } catch (error) {
        res.status(500).send("Įvyko serverio klaida")
        console.log(error);
    }
    

})


export default router