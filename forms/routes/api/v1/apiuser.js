var express = require('express');
var router = express.Router();
let { users } = require('../../../db/arraydata')
const db = require('../../../db/mongo')

//API - GET all users listing
router.get('/', function (req, res, next) {
  let readObj = {
    usersCollection: req.app.locals.usersCollection
  }

  db.readAll(readObj)
    .then(response => {
      res.json(response)
    })
    .catch(error => {
      console.log(error)
      res.json(500)
    })
});

//Get a user by ID
router.get('/:id', function (req, res, next) {

  let readObj = {
    id: req.params.id,
    usersCollection: req.app.locals.usersCollection
  }
  db.readOne(readObj)
    .then(response => {
      res.json(response)
    })
    .catch(error => {
      res.status(500).json(error)
    })
  /*let id = req.params.id
  let rtnVal = {}
  if (id != undefined) {
    rtnVal = users[id]
  }
  res.json(rtnVal)*/
});

//API - POST - create a user
router.post('/', function (req, res, next) {

  let createObj = {
    doc: req.body,
    usersCollection: req.app.locals.usersCollection
  }
  db.create(createObj)
    .then(response => {
      res.json(response.ops[0])
    })
    .catch(error => {
      res.status(500).json(error)
    })
  /*let user = {
    id: users.length, 
    fName: req.body.fName, 
    lName: req.body.lName, 
    password: req.body.password, 
    email: req.body.email
  }
  users.push(user)
  res.json(user)*/
});

//API - DELETE - delete a user
router.delete('/:id', function (req, res, next) {
  let deleteObj = {
    id: req.params.id,
    usersCollection: req.app.locals.usersCollection
  }
  db.del(deleteObj)
    .then(response => {
      if (response.deletedCount == 1) {
        res.json({})
      }
      throw new Error("Not Deleted")
    })
    .catch(error => {
      res.status(500).json(error)
    })
  /* let id = req.params.id
   users.splice(id, 1)
   res.json({})*/
});

//API - PUT
router.put('/:id', function (req, res, next) {
  let putObj = {
    id: req.params.id,
    doc: req.body,
    usersCollection: req.app.locals.usersCollection
  }
  db.readOne(putObj)
    .then(response => {
      if (response == null) {
        //add if not found
        db.create(putObj)
          .then(response => {
            res.json(response.ops[0])
          })
      } else {
        //update if found
        db.replace(putObj)
          .then(response => {
            res.json(response)
          })
      }
    })
    .catch(error => {
      res.status(500).json(error)
    })
  /* let index = req.params.id
  let user = users[index]
  for (let key in user) {
    if (req.body.hasOwnProperty(key)) {
      user[key] = req.body[key]
    }
  }
    users[index] = user
    res.json(user)*/
});

//API - PATCH - update a user
router.patch('/:id', async function (req, res, next) {

  let patchObj = {
    id: req.params.id,
    doc: req.body,
    usersCollection: req.app.locals.usersCollection
  }
  try {
    //check to see if we have an object with this id
    let response = await db.readOne(patchObj)

    if (response == null) {

      //add if not found
      throw new Error("Not Found")

    } else {
      //update the one we found
      await db.update(patchObj)
      //respond with the result from the db
      res.json(await db.readOne(patchObj))
    }
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})
/* let index = req.params.id
let user = users[index]
for (let key in user) {
  if (req.body.hasOwnProperty(key)) {
    user[key] = req.body[key]
  }
}
  users[index] = user
  res.json(user)*/


module.exports = router;
