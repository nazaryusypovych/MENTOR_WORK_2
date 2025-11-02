const express = require('express');
const app = express();
const PORT = 3000;


app.get(`/city`, (req, res) =>{
    res.json({name: `Lviv`});
});


app.post(`/city`, (req, res) =>{

    //res.json(JSON.parse(req.body));
    console.log(req.body)
});



app.listen(PORT, () => {
    console.log(`Сервер стартовал на http://localhost:${PORT}`);
    console.log(`Тестовый роут: http://localhost:${PORT}/`);
    console.log(`Тестовый роут JSON: http://localhost:${PORT}/test`);
});

