import { DataTypes } from "sequelize"; 
import db from "../config/db.js";
import User from "./User.js";
import Gender from "./Gender.js";

const Preference = db.define('preference', { 
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
User.belongsToMany(Gender, { through: Preference, foreignKey: 'user_id', otherKey: 'gender_id' });
Gender.belongsToMany(User, { through: Preference, foreignKey: 'gender_id', otherKey: 'user_id' });

export default Preference;