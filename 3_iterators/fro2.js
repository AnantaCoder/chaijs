const jsonArray = [{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}];

const firstElement = jsonArray[0]; // { name: "Alice", age: 30 }
const secondName = jsonArray[1].name; // "Bob"
console.log(firstElement.name)

jsonArray.forEach(function(data){
    console.log(`Age of ${data.name+1} is ${data.age+1}`)
})

for(index in jsonArray){
    console.log(jsonArray[index])
}