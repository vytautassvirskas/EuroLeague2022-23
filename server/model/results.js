import { DataTypes } from "sequelize";

const Results = (sequelize)=>{
    const Schema = {
        points: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        teamName: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        gameId:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
    return sequelize.define("results", Schema)
}

export default Results