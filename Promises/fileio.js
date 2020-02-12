//This is bringing in the 'fs' module and assigning it as a variable 
let fs = require('fs');

/*This is using a promise to ask the variable "fs" to use the readFile parameter to read the beers.txt file using
utf8 standard.  The promise is checking for errors using the if statement and then marking them resolved using 
the else statement.*/
function getBeers() {

    return new Promise((resolve, reject) => {

        fs.readFile("beers.txt", "utf8", (error, data) => {

            if (error != null) {
                reject(error)
            } else {
                resolve(data)
            }
        })
    })
}

//this is exporting the getBeers object
module.exports = getBeers