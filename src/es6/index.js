function newFuction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 36;
    var country = country || 'COL';
    console.log(name, age, country);
}
// es6
function newFunction2(name = 'Carlos', age = 36, country = 'COL'){
    console.log(name, age, country);
}
newFunction2();
newFunction2('Carlos', '36', 'COL');



let hello = "Hello";
let world = "world";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
// es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);    



 let lorem = "primera prueba de como funcionava la multilinea \n" + "y continua separada por el salto de inea";
 // es6
 let lorem2 = `para ecmascript 6 es diferente o mas sencillo
 solo basta con da enter o bajar al siguinte renglon`;
 console.log(lorem);
 console.log(lorem2);



 let person = {
     'name': 'Carlos',
     'age': 36,
     'country': 'COL',
 };
 console.log(person.name, person.age, person.country);
 // es6
 let {name, age, country} = person;
 console.log(name, age, country);

 // array
 let team1 = ['Carlos', 'Lizeth', 'Valeria'];
 let team2 = ['Rosario', 'Reinaldo', 'Cristian'];
 // es6
 let education = ['Andrea', ...team1, ...team2];
 console.log(education);



// variables var let
{
    var globalVar = "Global Var";
}
{
    let globalLet = 'Global Let';
    // aqui tiene que ir el console para que imprima el valor
}
console.log(globalVar);
console.log(globalLet);


// se agrega la opcion de const la cual no permite cambiar el valor
const a = 'b';
a = 'a';
console.log(a);


// forma de hacer objetos
let name = 'Carlos';
let age = 36;
//  es5
obj = {name: name, age: age };
//  es6
obj2 = {name, age };
console.log(obj2);

// funciones de tipo flecha
const names = [
    {name: 'Carlos', age: 36 },
    {name: 'Valeria', age: 1 },
];
let listOfNames = names.map(function(item) {
    console.log(item.name);
});
//  es6
let listOfNames2 = names.map(item => console.log(item.name));
// otra manera para las constantes es la siguiente
const listOfNames3 = (name, ege, country) => {
    // va la signacion de fragmento de las condiciones
}
// cuando se pasa solo un parametro seria de la siguinete forma
const listOfNames4 = name => {
    // franento de codigo de las condiciones que se desea
}
// para operar de la siguiente forma
const square = num => num * num;


// ASINCRONIZMO las promesas

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey¡¡');
        } else {
            reject('Ups¡¡');
        }
    });
}
helloPromise()
    .then(Response => console.log(Response))
    //.then(() => console.log('hola')) //es opcional depende la situcion o condiciones
    .then(error => console.log(error));


// CLASES

class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}
const calc = new calculator();
console.log(calc.sum(4, 6));

import { hello } from './src/es6/module';

hello();

function* helloWorld() {
    if(true){
        yield 'Hello';
    }
    if(true) {
        yield 'World';
    }
};  
const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
