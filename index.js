// les Variables en javaScript

// Variables "modifiables"
let myName = "Adem";
console.log(myName);
myName = "Oussama";
console.log(myName);

// Variables "pas modifiable"

const origin = "Algerie";

console.log(origin);

// Les types de données

// String = "Adem"
// Boolean = false / true -> 0 / 1 -> oui / non
// Number = 1 2 3 4 5 6 7 8 9
// BigInt = 100000000000000000000000000000000000000000
// Symbol new Symbol("a")
// null = "Il n'y a rien"
// undefined = pas définit

// 1. String

const myString = "double quote";
const myString2 = "single quote";
const myString3 = "back-tick";

const monName = "Adem";

const hellosentence = `Hello ${monName}`; // pareil que const hellosentence = "Hello" + monName

const firstChar = hellosentence[0];

console.log(firstChar);

// 2. Number

let myAge = 13 + 5;

// le + dans un String est une concaténation
// le + dans ue Number = addition

console.log(`Mon age est ${myAge}`);

const monPrenom = "Adem";

const monPrenomNumber = Number(monPrenom);

console.log(Number.isNaN(monPrenomNumber));
// = "est pas un nombre" =  true -> yes
// = false -> non

// 3. Boolean

const monAge = 20;

const isMajor = false;

console.log(`${monAge} est il majeur`);
