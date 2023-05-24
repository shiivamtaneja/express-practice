const express = require('express')
const app = express();

app.set('view engine', 'ejs')

// Since the middleware is defined before any get req, so it runs for
// every get req. (Top to Bottom)
// app.use(logger)

// To use the middleware for individual end points, pass it to the get req
// Single Middleware -  app.get('/', logger, (req, res) => { })
// Multiple Middleware -  app.get('/', logger, logger, logger, (req, res) => { }) 


// Use express's middleware to render static files
app.use(express.static('public'))

// Allows to access information coming from forms
app.use(express.urlencoded({ extended: true }))

// app.get('/', (req, res) => {
//     // Render file
//     res.render('index', { text1221: "world" })

//     // Download file
//     // res.download("server.js")

//     // Sending json
//     // res.json({ message: "error" })

//     // Sending Message
//     // res.send('hi')
// })

const userRouter = require('./routes/users')

app.use('/users', userRouter)


// function logger(req, res, next) {
//     console.log(req.originalUrl)
//     next()
// }


app.listen(3000)
