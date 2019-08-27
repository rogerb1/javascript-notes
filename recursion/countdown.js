/*

    Recursion: a function that calls itself.
    It works like normal loops, but you have an exit condition to stop.

    What makes it difficult? You have to keep track of previous
    calls inside the recursion stack.

*/

// Regular function
function countDown(n) {
    for (let i = n; i > 0; i--) {
        console.log(i)
    }
    console.log('horray')
}


// implementing a recursion function
// instead of using a loop, we are going to call
// the function over and over again

// 1st thing: we need to have our clause that 
// breaks away

/*

    for (let i = n; i > 0; i--) {

    }

    We are going through this loop as long 
    i > 0, but we break if long i < 0

    so, the return will break us out of the recursion
    but we should call the console.log() message first
    because this happens at the end.

    if (n <= 0) {
        return
    }

*/


/*  

    So let's implement the recursive nature to this.

    for (let i = n; i > 0; i--) {

    }

    countDownRecursive(n - 1)

    since we are counting down with i--

*/

function countDownRecursive(n) {
    if (n <= 0) {
        console.log('hooray')
        return
    }
    console.log(n)
    countDownRecursive(n - 1)
}

countDownRecursive(3);