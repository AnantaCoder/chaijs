let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i = 0; i < array1.length; i++) {
    if (array1[i] == 5) {
        console.log("This is 5")
        console.log(`This array length is ${array1.length}`)
    }
    else {
        console.log(array1[i])
    }
}
/**
1
2
3
4
This is 5
This array length is 9
6
7
8
9
 */
function generatePyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        let spaces = " ".repeat(rows - i);
        let stars = "*".repeat(2 * i - 1);
        console.log(spaces + stars);
    }
}

generatePyramid(5);


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`); //breaks after 5 
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

console.log("===============================")
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}