const form = document.querySelector('form');
// this use case will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function(e){
    e.preventDefault(); //since we are nt using any server 

    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    const results = document.querySelector('#results');

    //input validation - isNaN is a updated method 
    if(isNaN(height)|| isNaN(weight)||weight<=0||height<=0){
        results.innerHTML = `<span style="color: red;">Please enter valid height and weight!</span>`;
        return;
    }
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // classification
    let classification = "";
    if (bmi < 18.6) {
        classification = "Underweight";
        results.style.color = "blue";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        classification = "Normal";
        results.style.color = "green";
    } else {
        classification = "Overweight";
        results.style.color = "orange";
    }
    results.innerHTML = `<span>Your BMI is ${bmi} (${classification})</span>`;
});

