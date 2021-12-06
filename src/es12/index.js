// CADENAS DE TXTO BUSCAR Y REEMPLAZAR

const string = "Con JavaScript es maravilloso, con JavaScript puedo cambiar el futuro de la web";
const replacedString = string.replace("JavaScript", "Pyton");
console.log(replacedString);

//  es12 
const replacedString2 = string.replaceAll("JavaScript", "Pyton");
console.log(replacedString2);

const text = "me encanta angular.js";
text.replaceAll('angulasr', 'react');


class Message {
    show(val){
        console.log(val);
    };
    get #add(val){
    }
}

const message = new Message();
message.show('hola');

// pomis any

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));