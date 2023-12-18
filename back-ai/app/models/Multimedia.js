import { DataTypes } from "sequelize"; 
import db from "../config/db.js";
import Gender from "./Gender.js";
import Movie from "./Movie.js";

const Multimedia = db.define('multimedia', { 
    id: { 
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    data : {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 0,
    }
});

Gender.belongsToMany(Movie, { through: Multimedia, foreignKey: 'gender_id', otherKey: 'movie_id' });
Movie.belongsToMany(Gender, { through: Multimedia, foreignKey: 'movie_id', otherKey: 'gender_id' });

export default Multimedia;