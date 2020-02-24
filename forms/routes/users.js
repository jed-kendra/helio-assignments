var express = require('express');
var router = express.Router();
let {users} = require('../db/arraydata')

/* GET users listing. */
router.get('/add', function (req, res, next) {
  res.render('adduser', { response: "" })
});

router.post('/add', function (req, res, next) {
  let user = {
    id: users.length,
    fName: req.body.fName,
    lName: req.body.lName,
    password: req.body.password,
    email: req.body.email
  }
  users.push(user)
  res.render("adduser", { response: "User Added" })
});

//Display login form
router.get('/login', function (req, res, next) {
  res.render('login', { response: "" })
});

//Login user
router.post('/login', function (req, res, next) {
  let response = "Invalid Login"
  let foundUser = users.find((user) => {
    let rtnVal = false
    if (req.body.email.toLowerCase() == user.email) {
      rtnVal = true
    }
    return rtnVal
  })
  if (foundUser !== undefined) {
    if (foundUser.password === req.body.password) {
      response = `${foundUser.fName} ${foundUser.lName}`
    }
    res.render('login', { response })
  }
});

//Display update form
router.get('/update', function (req, res, next) {
  res.render('update', { users, user: "" })
});

router.post('/update', function (req, res, next) {
  let index = req.body.id
  let user = users[index]
  for (key in user) {
    if (req.body[key] !== "") {
      user[key] = req.body[key]
    }
    users[index] = user
    res.render("update", { users, user })
  }
});

//Display delete form
router.get('/delete', function (req, res, next) {
  res.render('delete', { users, response: "" })
});

//Delete post
router.post('/delete', function (req, res, next) {
  let response = "User Not Found"
  let foundUserIndex = users.findIndex((user) => {
    let rtnValue = false
    if (req.body.email.toLowerCase() == user.email.toLowerCase()) {
      rtnValue = true
    }
    return rtnValue
  })
  if (foundUserIndex != -1) {
    if (users[foundUserIndex].password == req.body.password) {
      response = `${users[foundUserIndex].fName} ${users[foundUserIndex].lName} has been deleted`
      users.splice(foundUserIndex, 1)
    }

  }
  res.render('delete', { users, response })
});

//Display forgot form
router.get('/forgot', function (req, res, next) {
  res.render('forgot', {users, response: ""})
});

//Forgot
router.post('/forgot', function (req, res, next) {
  let response = ""
  let foundUserIndex = users.findIndex((user) => {
    let rtnValue = false
    if (req.body.email.toLowerCase() == user.email.toLowerCase()) {
      rtnValue = true
    }
    return rtnValue
  })
  if (foundUserIndex != -1) {
    response = users[foundUserIndex].password
  }
  res.render('forgot', { users, response })
});



router.post('/', function (req, res, next) {
  let user = req.body
  user.id = users.length
  users.push(user)
  res.json(users[user.id])
});


router.patch('/id', function (req, res, next) {
  res.send('respond with a resource')

});

router.delete('/id', function (req, res, next) {

});

module.exports = router;
