/**
 *   Recall Promise: you commit to something then it is either
 *   completed (resolved) or rejected.
 *  
 *   .then() - is going to run a resolve
 *   .catch() - is going to run a reject and catch all errors
 *      
 *  
 *  
 * 
 */

// Use a promise function 
// Takes a location as a parameter
function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}`) // Making request to google
        if (location === 'google') {
            resolve('google says hi')
        } else {
            reject('google does not say hi')
        }
    })
}

// This takes the response as a parameter
// that is called later. It will only
// return a resolve, mearning only a pass.
function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Proccessing Response') // Proccessing Response
        resolve(`Extra Info ${response}`)
    })
}

// Since it is a promise statement we need
// To call it again with a then 
// and we return a promise
// we also have another then so that will
// get proccessed if the test passes.


// If the test does not pass then it goes to the 
// reject method and therefore it is a catch so 
// nothing else is called 
makeRequest('google').then(response => {
    console.log('Response Received') // Response Received
    return processRequest(response)
}).then(proccessedResponse => {
    console.log(proccessedResponse) // Extra Info Google says hi
}).catch(err => {
    console.log(err)
})