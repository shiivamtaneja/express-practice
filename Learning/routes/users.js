const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.send("User List")
})

router.get('/new', (req, res) => {
    res.render("users/newUsers")
})


router.post('/', (req, res) => {
    const isValid = true
    if (isValid) {
        users.push({ firstName: req.body.firstName })
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log(req.body.firstName)
        res.render('users/newUsers', { firstName: req.body.firstName })
    }
})

// Dynamic routes are always at the end
// Cause express works by going top to bottom

// Dynamically Get User from it's id
// router.get('/:id', (req, res) => {
//     res.send(`Get User with ID ${req.params.id}`)
// })
// router.put('/:id', (req, res) => {
//     res.send(`Update User with ID ${req.params.id}`)
// })
// router.delete('/:id', (req, res) => {
//     res.send(`Delete User with ID ${req.params.id}`)
// })

// To make this look better, we use router.route()
router.route('/:id')
    .get((req, res) => {
        // console.log(req.user)
        res.send(`Get User with ID ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update User with ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete User with ID ${req.params.id}`)
    })


// Middleware - code that runs between start of req and end of req
const users = [{ name: "Shivam" }, { name: "Taneja" }]
router.param('id', (req, res, next, id) => {
    req.user = users[id]
    next()
})

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

module.exports = router