import { DataTypes } from "sequelize";
const Teams = (sequelize)=>{
    const Schema = {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tournament: {
            type: DataTypes.STRING,
            allowNull: false 
        }

    }
    return sequelize.define("teams", Schema)
}

export default Teams