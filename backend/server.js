import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import passport from 'passport';

//import routes
import userRoutes from './routes/userRoutes.js';

//import passport config
import configurePassport from './passport-config.js'

//access .env
dotenv.config();
const {DB_USER, DB_PASS,DB_HOST,DB_NAME,PORT} = process.env

//declare app which allows us to use the web app functionalities.
const app = express();

//allows us to send json information to the server (this is configuration)
app.use(express.json());
app.use(cors())

//declare initialize passport
/* app.use(passport.initialize());
configurePassport(passport) */

//connect to the database 
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`)
.then(() => {console.log("we are connected to the database.")})
.catch((error) => { console.log('an error occurred while connecting ot the db', error)})

// use routes
app.use('/api/users', userRoutes);

//activate server
app.listen(PORT, ()=> {
    console.log(`The server is listening for requests on port ${PORT}` );
})