let express = require('express')


// create our express app
let app=express()

//setup view engine for ejs
app.set('view engine','ejs')

// creates route to static file
app.use(express.static('public'))


// create a callback function
app.get('/profile', (req, res) => {
    res.render("profile",{data: "this is a test"}) 

})

// Make the server listen on port 3000
let server = app.listen(3000,() => {})