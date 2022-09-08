import express from 'express';
import db from '../database/connect.js';


const router = express.Router();

router.post("/:id", async(req,res)=>{
    try {
        req.body.gameId =req.params.id
        new db.Results(req.body).save()
        res.send("Įrašas sėkmingai sukurtas")
    } catch {
        res.status(500).send("Įvyko serverio klaida")
    }
    
})

router.get("/:id", async(req,res)=>{
    console.log("req.query zemiau: ");
    console.log(req.query);
    try {
        const results = await db.Results.findAll({
            include: db.Games,
            order: [["time", "DESC"]],
            where: { gameId: req.params.id }
        })

        const gameInfo = await db.Games.findByPk(req.params.id)
    
        const team1Sum = await db.Results.sum('points', { where: { teamName: gameInfo.dataValues.team1Name  } });
        const team2Sum = await db.Results.sum('points', { where: { teamName: gameInfo.dataValues.team2Name  } });
       
        res.json({results, team1Sum, team2Sum, gameInfo})
    } catch {
        res.status(500).send("Įvyko serverio klaida")
    }
    
})


export default router

