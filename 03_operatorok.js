console.log(5 == "5");//T
console.log(5 === "5");//F
console.log(5 !== "5");//T
console.log(5 !== 5);//F
let n = 6;
console.log(`a: ${n}`);//F
console.log(!n < 5)

console.log("logikai operátor")
console.log(n > 5 && n < 20)
console.log(n > 5 && typeof(n) === "string")
console.log(n === 3 || n === 6)

console.log("aritmetikai operátorok")
let z; 
z=3+4; // összeadás
console.log(z)
z=3-4; // kivonás
console.log(z)
z=2*3; // szorzás
console.log(z)
z=2/3; // osztás
console.log(z)
z=3%2; // modulo
console.log(z)
z=3**2; // hatványképzés (hatványalap**hatványkitevő)
console.log(z)

//Pre és pro inkrement
let p, y; 
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
kocka += "has"
console.log(kocka);

//kapcsolati operátorok
const gyumolcs = { fa: 'alma', fajta: 'Starking', szin: 'piros' }; 
console.log('fajta' in gyumolcs); //true
console.log(gyumolcs instanceof String); //true

function fuggveny() { 
    let szam = 5;
    var valtozo = 20;
    return szam; 
}
// console.log(fuggveny());
// console.log(valtozo);

x = 5
y = "8"
let u = x + y
console.log(c);