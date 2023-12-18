import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Movie = db.define('movie', {
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
        defaultValue: 'Laborum duis fugiat sit eiusmod aute aute qui Lorem. Id veniam sit cupidatat irure pariatur et fugiat. Sint Lorem elit ipsum reprehenderit sit est fugiat. Est sint eu incididunt laboris laborum exercitation fugiat. Aliquip excepteur incididunt aliquip ut tempor veniam mollit amet. Amet eu minim laboris laborum occaecat sit est ex. Velit et ea quis proident non aute ipsum.',
    },
    link : {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Movie;
