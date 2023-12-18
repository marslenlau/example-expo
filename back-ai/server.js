import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import userRoute from './app/routes/userRoutes.js';
import genderRoute from './app/routes/genderRoutes.js';
import movieRoute from './app/routes/movieRoutes.js';
import preferenceRoute from './app/routes/preferenceRoutes.js';
import testConnection from './app/database/testing_db.js';
import syncConnection from './app/database/syncronic_db.js';

//? 
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

//? configuration
app.use(morgan('combined'));
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(cors());

//? directory public
app.use(express.static('app/public'));

//? database
testConnection();
// syncConnection();

//? routes
app.use('/api', userRoute);
app.use('/api', genderRoute);
app.use('/api', movieRoute);
app.use('/api', preferenceRoute);
//? run app
const servidor = app.listen(PORT, () => { 
    console.log(`Server running on port ${PORT}`);
});