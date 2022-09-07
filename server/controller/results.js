import express from 'express';
// import {Op} from "sequelize" // importuojam operatorius paieskai DB

import db from '../database/connect.js';


const router = express.Router();

router.post("/", async(req,res)=>{
    try {
        console.log(req.body);
        new db.Results(req.body).save()
        res.send("Įrašas sėkmingai sukurtas")
    } catch {
        res.status(500).send("Įvyko serverio klaida")
    }
    
})

router.get("/", async(req,res)=>{
    // const options ={}
    // options.order = [["time", "DESC"]]
    try {
        const results = await db.Results.findAll({
            include: db.Games,
            order: [["time", "DESC"]]
        })
       
        res.json(results)
    } catch {
        res.status(500).send("Įvyko serverio klaida")
    }
    
})


export default router