var express = require('express');
var router = express.Router();
let {users} = require('../../../db/arraydata')

//API - GET
router.get('/', function (req, res, next) {
  res.json(users)
});

router.get('/:id', function (req, res, next) {
  let id = req.params.id
  let rtnVal = {}
  if (id != undefined) {
    rtnVal = users[id]
  }
  res.json(rtnVal)
});

//API - POST
router.post('/', function (req, res, next) {
  let user = {
    id: users.length, 
    fName: req.body.fName, 
    lName: req.body.lName, 
    password: req.body.password, 
    email: req.body.email
  }
  users.push(user)
  res.json(user)
});

//API - DELETE
router.delete('/:id', function (req, res, next) {
  let id = req.params.id
  users.splice(id, 1)
  res.json({})
});

//API - PATCH
router.patch('/:id', function (req, res, next) {
  let index = req.params.id
  let user = users[index]
  for (let key in user) {
    if (req.body.hasOwnProperty(key)) {
      user[key] = req.body[key]
    }
  }
    users[index] = user
    res.json(user)
  });


module.exports = router;
