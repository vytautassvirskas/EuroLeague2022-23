import {HasMany, Sequelize} from "sequelize";
import mysql from "mysql2/promise";

import Games from "../model/games.js";
import Results from "../model/results.js";

const database = {}
const credentials = {
    host:"localhost",
    user:"root",
    password:"",
    database:"euroLeague"
}

try {
    // prisijungimas
    const connection = await mysql.createConnection({
        host:credentials.host,
        user:credentials.user,
        password:credentials.password
    })
    // dumenu bazes sukurimas
    await connection.query('CREATE DATABASE IF NOT EXISTS '+ credentials.database)
    const sequelize = new Sequelize(credentials.database, credentials.user, credentials.password, {dialect: "mysql"})
    
    database.Games = Games(sequelize)
    database.Results = Results(sequelize)

    database.Games.hasMany(database.Results)
    database.Results.belongsTo(database.Games)
    

    await sequelize.sync({alter: false})
} catch (error) {
    console.log(error)
    console.log("nepavyko prisijungti prie duomenu bazės");
}

export default database;