console.log(5 == "5"); //true
console.log(typeof(5));
console.log(typeof("5"));

console.log(5 === "5"); // false
console.log(5 === 5); // true
console.log(5 !== "5"); //true
console.log(5 !== 5); //false

let n = "6";
console.log(`a: ${n}`);
console.log(!(n < 5))

console.log("LOGIKAI OPERATOR")
console.log(n > 5 && n < 20);
console.log("check type");
console.log(n > 5 && typeof a === "number");
console.log(n === 3 || n === 6);


console.log("Aritmetikai operatorok")
let z; 
z=3+4; // összeadás
console.log(z);
z=3-4; // kivonás
console.log(z);
z=2*3; // szorzás
console.log(z);
z=2/3; // osztás
console.log(z);
z=3%2; // modulo
console.log(z);
z=3**2; // hatványképzés (hatványalap**hatványkitevő
console.log(z);

console.log("PRE es PROINKREMENT")
let p,y; 
p=5;
y=++p; // preinkrement 
console.log(`p=${p}, y=${y}`); 
p=5; 
y=p++; // posztinkrement 
console.log(`p=${p}, y=${y}`); 
p=5; 
y=--p; // predekrement 
console.log(`p=${p}, y=${y}`); 
p=5; 
y=p--; // posztdekrement 
console.log(`p=${p}, y=${y}`); 

let kocka = "kocka";
kocka += "has";
console.log(kocka);

//kapcsolati operatorok
const gyumolcs = { fa: 'alma', fajta: 'Starking', szin: 'piros' }; 
console.log('fajta' in gyumolcs); //true
console.log(gyumolcs instanceof String); //true

function myFunction()
{
    let valtozo = 5;
    var valtozo2 = 20;
    return "valtozo";
}

console.log(myFunction())
//console.log(valtozo)
console.log(valtozo2)

x = 5
y = "8";
let u = x + y;
console.log(u);
