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

viewStreamPromise().then((message) => {
    console.log('Success: ' + message)
}).catch((error) => {
    console.log(error.name + ' ' + error.message)
})