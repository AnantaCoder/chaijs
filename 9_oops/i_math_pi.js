const descriptor = Object.getOwnPropertyDescriptor
console.log(Math.PI) // cant be over written

const chai = {
    name: "Hing chai",
    price: 999,
    isAvailable: true,
    orderChai: () => {
        console.log("chai ordered")
    }
}
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/*{
    value: 'Hing chai',
    writable: true,
    enumerable: true,
    configurable: true
  }*/


Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: false,

})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/**{
  value: 'Hing chai',
  writable: false,
  enumerable: true,
  configurable: true
} */

  for (let i of Object.getOwnPropertyNames(chai)) {
    let j = chai[i];
    if (typeof j !== 'function') {
        console.log(`${i} and ${j}`);
    }
}

