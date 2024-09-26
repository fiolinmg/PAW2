const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('Halaman Tentang Perusahaan');
});

app.get('/contact', (req, res) => {
    res.send('Halaman Contact');
});

//middleware
app.use('*', (req, res) => {
    res.status(404);
    res.send('404, Halaman Tidak Ditemukan');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});