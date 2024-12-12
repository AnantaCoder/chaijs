/**
 * The 'for' and 'while' loops are what we call 'entry control loops' because they check the condition before entering the loop. On the other hand,
 *  'do-while' loops are known as 'exit control loops' since they ensure that the loop body is executed at least once before checking the condition.
 */

let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    //console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);