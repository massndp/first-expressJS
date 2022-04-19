const express = require('express');
const app = express();
const port = 3000;

app.set('views', './views') //specify the views directory
app.set('view engine', 'ejs')//register the template engine

//render view
app.get('/', (req, res) => {
    const namaTeman = [
        {name: 'Rama'},
        {name: 'Dody'},
        {name: 'Nadia'},
        {name: 'Sueb'},
    ]
    res.render('index', {
        name: 'Bayu Adi Pratama',
        umur: 26,
        namaTeman: namaTeman

    })
})

// app.get('/', (req, res) => res.send('World Wide'))
// app.get('/:name', (req, res) => res.send(`Nama Saya : ${req.params.name} `))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))