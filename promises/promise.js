/*

  .then() is used for resolved (completed)
  .catch() is used for rejection 

*/

let userLeft = true;
let userViewsMemes = false;

function viewStreamPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'user left',
                message: ':('
            })
        } else if (userViewsMemes) {
            reject({
                name: 'User watching meme',
                message: 'writing < memes'
            })
        } else {
            resolve('Subscribe')
        }
    })
}

// the error parameter is represeting 
// the returned reject object per say 
// so we can use . notation to access elements

// the message parameter is represeting
// the resolved inner details

// We need to call this function and then
// do something since it returns a promise.
viewStreamPromise().then((message) => {
    console.log('Success: ' + message)
}).catch((error) => {
    console.log(error.name + ' ' + error.message)
})