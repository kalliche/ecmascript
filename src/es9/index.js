const obj = {
    name: 'Carlos',
    age: 36,
    country: 'COL' 
};
let{ name, ...all } = obj;
console.log(name, all);


//concatenar y crear uevos objetos

const obj = {
    name: 'Carlos',
    age: 36
};
const obj1 = {
    ...obj,
    country: 'COL'
};
console.log(obj1);

// otras funciones importantes

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    });
};
helloWorld()
    .then(response => console.log(response))
    .then(error => console.log(error))
    .finally(() => console.log('Fynalizo'))

// FECHAS por separado

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2021-12-30');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);