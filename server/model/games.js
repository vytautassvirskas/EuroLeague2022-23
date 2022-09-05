import { DataTypes } from "sequelize";

const Games = (sequelize)=>{
    const Schema = {
        tournamentName: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        gamePlace: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        gameDate: {
            type: DataTypes.DATE,
            allowNull: false 
        },
        gameTime: {
            type: DataTypes.TIME,
            allowNull: false 
        },
        firstTeamName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstTeamLogo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstTeamQ1Score: {
            type: DataTypes.INTEGER
        },
        firstTeamQ2Score: {
            type: DataTypes.INTEGER
        },
        firstTeamQ3Score: {
            type: DataTypes.INTEGER
        },
        firstTeamQ4Score: {
            type: DataTypes.INTEGER
        },
        firstTeamFinalScore: {
            type: DataTypes.INTEGER
        },
        secondTeamName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        secondTeamLogo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        secondTeamQ1Score: {
            type: DataTypes.INTEGER
        },
        secondTeamQ2Score: {
            type: DataTypes.INTEGER
        },
        secondTeamQ3Score: {
            type: DataTypes.INTEGER
        },
        secondTeamQ4Score: {
            type: DataTypes.INTEGER
        },
        secondTeamFinalScore: {
            type: DataTypes.INTEGER
        },

    }
    return sequelize.define("games", Schema)
}

export default Games