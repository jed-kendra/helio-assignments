//This is assigning a variable to the imported promise from fileio.
let getBeers = require('./fileio')


/*This is using the async function to allow us to pause the promise (using await).  It has 3 promises.
The first promise is using the "then" promise to parse the data so it is no longer reading as text.  The second
promise is using the "then" promise to create an object called objBeers, then console logging just the 
1st variable from that object (using [0]).  The "catch" promise is next.  It is catching any errors that happen 
with the promise, then console logging them so we can see what they are.  The "finally" promise is being used 
to end the promise chain and console logging "Finally Run", so we can see it is done.

After the "finally" promise, we are using the "await" to pause the program until the promises resolve.  
After that, we are console logging "New Beers".  Then we are console logging the "newBeers" variable, parsing it,
and calling the 2nd variable from the array.
*/
async function main() {

    getBeers()
        .then(result => {

            return JSON.parse(result)
        })
        .then(objBeers => {
            console.log(objBeers[0])
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            console.log("Finally Run")
        })

    let newBeers = await getBeers()
    
    console.log("New Beers")
    console.log(JSON.parse(newBeers)[1])

    console.log("End of Program")
}

main()