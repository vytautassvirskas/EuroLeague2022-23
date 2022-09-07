import { DataTypes } from "sequelize";

const Games = (sequelize)=>{
    const Schema = {
        tournament: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        place: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false 
        },
        team1Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        team1Logo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // team1Q1Score: {
        //     type: DataTypes.INTEGER
        // },
        // team1Q2Score: {
        //     type: DataTypes.INTEGER
        // },
        // team1Q3Score: {
        //     type: DataTypes.INTEGER
        // },
        // team1Q4Score: {
        //     type: DataTypes.INTEGER
        // },
        // team1FinalScore: {
        //     type: DataTypes.INTEGER
        // },
        team2Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        team2Logo: {
            type: DataTypes.STRING,
            allowNull: false
        }
        // team2Q1Score: {
        //     type: DataTypes.INTEGER
        // },
        // team2Q2Score: {
        //     type: DataTypes.INTEGER
        // },
        // team2Q3Score: {
        //     type: DataTypes.INTEGER
        // },
        // team2Q4Score: {
        //     type: DataTypes.INTEGER
        // },
        // team2FinalScore: {
        //     type: DataTypes.INTEGER
        // },

    }
    return sequelize.define("games", Schema)
}

export default Games