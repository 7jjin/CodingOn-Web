const express = require('express');
const app = express();
const PORT = 8000;

//ejs
app.set('view engine', 'ejs');
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router
app.get('/', (req, res) => {
    res.render('index');
});

//server open
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
