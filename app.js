const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3001
const { loadContact, findContact } = require('./utils/contacts.js')


//gunakan ejs
app.set('view engine','ejs')
app.use(expressLayouts)

const mahasiswa = [
    {
        nama: 'Fachrul Reza',
        email: 'reza20@gmail.com',
        nohp: '123123214'
    },
    {
        nama: 'Faiz Abdurrahman',
        email: 'faiz@gmail.com',
        nohp: '99123213'
    }
]



app.get('/', (req,res) => {
    res.render('index.ejs', { 
        layout: 'layouts/main',
        nama: 'Fachrul Reza', title: 'Jl Halaman Home', mahasiswa : mahasiswa})
}) 
app.get('/about', (req, res) => {
    res.render('about.ejs', { 
        layout: 'layouts/main',
        title: 'Halaman About '})
})
app.get('/contact', (req, res) => {
    const datanya = loadContact()
//    console.log(datanya)
    res.render('contact.ejs', { 
        layout: 'layouts/main',
        title: 'Halaman contact',
        contacts: datanya })
})

app.get('/contact/:nama', (req, res) => {
    const datanya = findContact(req.params.nama)

    res.render('detail.ejs', {
        layout: 'layouts/main',
        title: 'Halaman Detail contact',
        contact: datanya
    })
})


// app.get('/about', (req, res) => {
//     res.send('Hello about');
// })




























app.use('/', function(req,res) {
    res.status(404)
    res.send('404 Page not found')
})

app.listen(port, () => {
    console.log(`Example app listening to port http://localhost:${port}`)
})




































