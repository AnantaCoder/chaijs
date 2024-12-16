const grey = document.getElementById("grey")
const white = document.getElementById("white")
const blue = document.getElementById("blue")
const yellow = document.getElementById("yellow")

function bgchange(colorID) {
    if (colorID === 'grey') {
        document.body.style.background = "grey"
    } else if (colorID === 'white') {
        document.body.style.background = "white"
    } else if (colorID === 'blue') {
        document.body.style.background = "blue"
    } else if (colorID === 'yellow') {
        document.body.style.background = "yellow"
    }

}


/** ALTERNATE METHOD - no need for onclick
const colors = ['grey', 'white', 'blue', 'yellow'];

colors.forEach(color => {
    const element = document.getElementById(color);
    element.addEventListener('click', () => {
        document.body.style.backgroundColor = color;
    });
});


 */