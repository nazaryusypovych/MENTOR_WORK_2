const express = require('express');
const mongoose = require('mongoose');
const router = require("./router.js");

const DB_URI =`mongodb+srv://user:userpassword@cluster0.8obzove.mongodb.net/?appName=Cluster0`


const app = express();
const PORT = 3003;

app.use(express.json());
app.use(`/api`, router)



async function startApp() {

    try {
        await mongoose.connect(DB_URI);
        app.listen(PORT, () => {
            console.log(`Сервер стартовал на http://localhost:${PORT}`);
            console.log(`Тестовый роут: http://localhost:${PORT}/`);
            console.log(`Тестовый роут JSON: http://localhost:${PORT}/test`);
        });


    }catch (e) {
        console.log(e);
    }

}

startApp();



