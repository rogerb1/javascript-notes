// Use a promise function 
// Takes a location as a paramter
function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}`)
        if (location === 'google') {
            resolve('google says hi')
        } else {
            reject('google does not say hi')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Proccessing Response')
        resolve(`Extra Info ${response}`)
    })
}

// we need to tell js that this is asynchronous
// so we use they keyword async.

// await means the code should 
// wait until this function is finished and then after 
// keep going until the value of a promise is returned in a variable.  

// try {} all the code that can throw an error,
// any error in try calls to catch
// catch () : anything you want to do when an error is catched

// In an reject situation:
// I call the makeRequest function
// which returns a promise. In this case, a rejection.
// immediatley it failed so we go into the catch statement

// In a response situation:
// google passes so it returns a resolve
// then it called the proccessedRequest function because it has 
// not failed yet, and returns the values. It works because
// the function  only returns  a resolve! So it keeps going 
// then it keeps going.

/*
 output: 
 Making request to google 
 Response Received ​​​​​
 Proccessing Response ​​​
 Extra Info google says hi 
*/

async function doWork() {
    try {
        const response = await makeRequest('google') // google
        console.log('Response Received') // Response Received
        const proccessedResponse = await processRequest(response) // passes: google says hi
        console.log(proccessedResponse);
    } catch (err) {
        console.log(err) // google does not say hi
    }
}

doWork();