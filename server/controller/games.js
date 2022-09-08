import express from 'express';
// import {Op} from "sequelize" // importuojam operatorius paieskai DB

import db from '../database/connect.js';
// dariau be foto ikelimo
import upload from '../middleware/multer.js';



const router = express.Router();

router.get("/", async(req,res)=>{
try {
    // const games = await db.Games.findAll({
    //     include: db.Results,
    //     order: [["date", "ASC"]]
    // })
    // console.log(games[0]);
    // res.json (games)

    const games = await db.Games.findAll({

        order: [["date", "ASC"]],

        raw: true

    })

    await Promise.all( games.map(async (game, key) => {

        games[key].team1Sum = await db.Results.sum('points', { where: { gameId: game.id, teamName: game.team1Name  } })

        games[key].team2Sum = await db.Results.sum('points', { where: { gameId: game.id, teamName: game.team2Name  } })

    }))



    res.json (games)
    
} catch {
    res.status(500).send("Įvyko serverio klaida")
    
}
})


router.get("/:id", async(req,res)=>{
    console.log("req.query zemiau: ");
    console.log(req.query);
    try {
        const games = await db.Games.findByPK(req.params.id)
        console.log("games zemiau: ");
        console.log(games);
        // res.json (games)
        
    } catch {
        res.status(500).send("Įvyko serverio klaida")
        
    }
    })



// be foto ikelimo
router.post("/", async(req,res)=>{
    try {
        new db.Games(req.body).save()
        res.send("Įrašas sėkmingai sukurtas")
    } catch {
        res.status(500).send("Įvyko serverio klaida")
    }
    
})



// su foto ikelimu
// router.post("/", upload.array("image", 2), async(req,res)=>{
//     console.log(req.files)
//     try {
//         if(req.files)
//             req.body.team1Logo = "/uploads/"+req.files[0].filename
//             req.body.team2Logo = "/uploads/"+req.files[1].filename
//         new db.Games(req.body).save()
//         res.send("Įrašas sėkmingai sukurtas")
//     } catch {
//         res.status(500).send("Įvyko serverio klaida")
//     }
    
// })


export default router