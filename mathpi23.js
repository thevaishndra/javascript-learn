const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);
//console.log(Math.PI);
//Math.PI = 5;
////console.log(Math.PI);

const cake = {
    name: 'red velvet',
    price: '600',
    isAvailable: true
}
console.log(Object.getOwnPropertyDescriptor(cake, "name"));

Object.defineProperty(cake, 'name', {
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(cake, "name"));