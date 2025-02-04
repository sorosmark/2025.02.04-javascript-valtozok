console.log("hello");
//változó deklarálása haszn előtt (elavult)
var a = 2;
console.log(a);
//érték módosítása
let b = 3; 
b = 4; 
const c = 5; 
// c = 6; //hiba
//var vátozók ujradefiniálása
var x = 5; 
console.log(x); 
var x = "alma"; 
console.log(x);
//Uncaught SyntaxError: Identifier 'd' has already been declared (at 01_valtozok.js:18:5)
let d = 3;
console.log(d);
//let d = 4;
//console.log(d);