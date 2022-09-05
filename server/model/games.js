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
        firstTeam: {
            type: DataTypes.STRING,
            allowNull: false
        },
        secondTeam: {
            type: DataTypes.STRING,
            allowNull: false
        },

    }
    return sequelize.define("games", Schema)
}

export default Games