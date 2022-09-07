import express from 'express';
import cors from 'cors'

import games from './controller/games.js';
import results from './controller/results.js';

// import database from './database/connect.js';



const app = express()

//CORS blokavimo nuėmimas 
app.use(cors())

//Duomenų priėmimui JSON formatu
app.use(express.json())

// failu perdavimui is statines direktorijos
app.use("/uploads", express.static("uploads"))

// duomenu priemimui POST metodu
app.use(express.urlencoded({extended:true}))

app.set('trust proxy', 1) // trust first proxy

app.use('/games/', games)
app.use('/results/', results)


app.listen(3000)