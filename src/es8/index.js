// NATRICES

const data = {
    frontend: 'Carlos',
    backend: 'Lizeth',
    desing: 'Valeria',
};
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// DE MATRIZ A ARREGLOS

const data = {
    frontend: 'Carlos',
    backend: 'Lizeth',
    desing: 'Valeria',
};
const values = Object.values(data);
console.log(values);
console.log(values.length);

//  TRANSFORMAR UN STRING
const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd (12, '-----'));
console.log('food'.padEnd(12, '   -----'));

// Promesas y 

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello world'), 3000)
        : reject(new Error('Test Error'))
    });
};
const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
};
helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};
anotherFunction();

