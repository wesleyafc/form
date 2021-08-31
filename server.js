const express = require('express');
const app = express();
const routes = require('./routes')
//const mongoose = require('mongoose');
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const cors = require('cors');
//libds


const firebaseConfig = {
    apiKey: "AIzaSyB267r1X3-Qd4imBwgmckqwke0U7CvRo2k",
    authDomain: "tenacious-post-272403.firebaseapp.com",
    projectId: "tenacious-post-272403",
    storageBucket: "tenacious-post-272403.appspot.com",
    messagingSenderId: "76970208224",
    appId: "1:76970208224:web:5b4339c5dceb3e175f1985",
    measurementId: "G-J6GCDKH3EW"
};


//BD setup
require('dotenv').config()

//app setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(routes)
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//BD connect
/*
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log("connected to DB"))
*/

app.listen(process.env.PORT, () => {
    console.log("server online!!!")
})