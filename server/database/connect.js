import {Sequelize} from "sequelize";
import mysql from "mysql2/promise";

import Games from "../model/games.js";
import Teams from "../model/teams.js";

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
    database.Teams = Teams(sequelize)
    

    await sequelize.sync({alter: true})
} catch (error) {
    console.log(error)
    console.log("nepavyko prisijungti prie duomenu bazės");
}

export default database;