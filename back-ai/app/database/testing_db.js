import db from '../config/db.js';
//? testing de coneccion a base de dato
const testConnection = async() => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export default testConnection;