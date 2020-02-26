const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId

let client

function connect(objConnect) {

    const uri = "mongodb+srv://jedkendra:Maverick123@cluster0-hbkq5.mongodb.net/test?retryWrites=true&w=majority";

    client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    return client.connect()
        .then(connection => {
            objConnect.usersCollection = connection.db("Helio").collection("users");

            return "test"
        })
        .catch(error => {
            throw new Error(error)
        })
}
//end of connect function

function close() {
    client.close()
}
// Close connection

function create(objCreate) {

    return objCreate.usersCollection.insertOne(objCreate.doc)
}

// Get all
function readAll(objRead) {

    return new Promise((resolve, reject) => {
        objRead.usersCollection.find({}).toArray(function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result)
        })
    })
}

// Get id
function readOne(objRead) {

    return objRead.usersCollection.findOne({_id: ObjectId(objRead.id)})
}

//Put
function replace(objReplace) {
    delete objReplace.doc._id
    return objReplace.usersCollection.replaceOne({_id: ObjectId(objReplace.id)}, objReplace.doc)
}

//Patch
function update(objUpdate) {
    delete objUpdate.doc._id
    return objUpdate.usersCollection.updateOne({_id: ObjectId(objUpdate.id)}, {$set: objUpdate.doc})
}

//Delete
// can't use delete as function name because it is a js key word
function del(objDelete) {

    return objDelete.usersCollection.deleteOne({_id: ObjectId(objDelete.id)})
}

module.exports.connect = connect
module.exports.close = close
module.exports.create = create
module.exports.readAll = readAll
module.exports.readOne = readOne
module.exports.replace = replace
module.exports.update = update
module.exports.del = del
