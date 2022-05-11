const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const errorHandler = require('./middleware/errorHandler')
const PORT = process.env.PORT || 3500;

// CORS
app.use(cors())

//handles form data
app.use(express.urlencoded({ extended: false }))

// handles json
app.use(express.json())

// handles static files
app.use(express.static(path.join(__dirname, '/public')))


// routes
app.use('/', require('./routes/root'))
app.use('/states', require('./routes/api/states'))

// catch all
app.get('/*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'public', 'views', '404.html'))  
    } else if (req.accepts('json')) {
        res.json({"error": "404 Not Found"})
    } else {
        res.type('txt').sendFile(path.join(__dirname, 'public', 'views', '404.html'))  
    } 
})

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));