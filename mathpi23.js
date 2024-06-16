const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);
//console.log(Math.PI);
//Math.PI = 5;//we can change the value of pi by doing getOwnpropertyDescriptor
////console.log(Math.PI);

const cake = {
    name: 'red velvet',
    price: '600',
    isAvailable: true,

    orderCake: function(){
        console.log("cake not made");
    }
}
console.log(Object.getOwnPropertyDescriptor(cake, "name"));

Object.defineProperty(cake, 'name', {
    writable: false,//comment this
    enumerable: false//and change value, the iteration will be different
})
console.log(Object.getOwnPropertyDescriptor(cake, "name"));

for (let [key, value] of Object.entries(cake)) {//now cake is iterable if we add object.entries
    if (typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}