var PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
const randomWord = require('random-word');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// const path = require('path');



app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    const word = randomWord();
    res.render("index.ejs", { word });
    // res.render("/main.js", { word });
})

app.listen(PORT, () => {
    console.log("Listening on port 3000!!");
})
