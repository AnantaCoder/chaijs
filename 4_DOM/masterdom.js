// DOM Manipulation Examples

// 1. getElementById()
const title = document.getElementById('main-heading');
title.textContent = "Your Favorite Movie Franchise!";

// 2. getElementsByClassName()
const listItems = document.getElementsByClassName('list-items');
for(i = 0; i<listItems.length ;i++){
    listItems[i].style.fontWeight = "bold";
    listItems[i].style.padding = "1px"
}

// 3. getElementsByTagName()
const allListItems = document.getElementsByTagName('li');
for (let item of allListItems) {
    item.style.color = 'black';
}

// 4. querySelector()
const firstListItem = document.querySelector('.list-items');
firstListItem.style.backgroundColor = 'gray';

// 5. querySelectorAll()
const allItems = document.querySelectorAll('.list-items');
allItems.forEach(item => (item.style.fontWeight = 'bold'));
// allItems.forEach(item=>item.innerHTML = "this is a new format" )


//modifying the text the classes and all
const li = document.querySelector('li')
const ul = document.querySelector('ul')
ul.append(li)
li.innerText = 'THIS IS harry'



// 6 . Traverse the DOM

//7. parent node Traversal
let ul1 = document.querySelector('ul')
console.log(ul1.parentNode.parentNode); // returns the body element


//8. child node Traversal
//9. sibling node Traversal
//10. nextSibling and previousSibling
let div1 = document.querySelector("div")
console.log(div1.childNodes); //NodeList(5) [text, h1#main-heading, text, ul, text]
console.log(div1.nextSibling)


// EVENT LISTENERS
// 1. addEventListener()

// Alert "Hello World!" when the user clicks on an element:

ul1.addEventListener("click", function(){ alert(`This is the event listener ${ul.textContent}`); });


li.addEventListener("mouseover",hovering);
function hovering(){
    console.log("you are hovering over the ul");
    

}























// Add Event Listeners to List Items
allItems.forEach(item => {
    item.addEventListener('click', () => {
        alert(`You clicked on: ${item.textContent}`);
        title.textContent = `You selected: ${item.textContent}`;
    });
});

// Dynamic Container Selection
const container = document.querySelector('div');
container.style.border = '2px solid black';
















































// // Select elements
// const mainHeading = document.getElementById('main-heading');
// const listItems = document.querySelectorAll('.list-items');

// // Change heading color dynamically
// mainHeading.style.color = 'teal';

// // Add click event listeners to list items
// listItems.forEach((item, index) => {
//   item.addEventListener('click', () => {
//     alert(`You selected: ${item.textContent}`);
//     mainHeading.textContent = `Your Favorite is: ${item.textContent}`;
//     item.style.backgroundColor = '#b3e5fc'; // Change clicked item's background
//     item.style.color = 'black';
//   });
// });

// MESSAGE BELOW 👇🏻👇🏻👇🏻
// WHATS APP PE MSG KARNE PE BHI RELPY NAHI KARNE WALE BUSY LOG JO PADH RAHE HAI WO YE BHEJKE SHARMINDA NA KARE . 