import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Gender = db.define('gender', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description : {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: 'Laborum duis fugiat sit eiusmod aute aute qui Lorem.',
    },
});

export default Gender;
