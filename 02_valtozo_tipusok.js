let e = 2;
console.log("e = " + e + " típusa: " + typeof(e));
const pi = 3.14;
console.log("pi = " + pi + " típusa: " + typeof(pi));

console.log(0.1 + 0.2);
console.log((0.1 + 0.2).toFixed(2));

console.log(-1/0);

let firstname = "John"
let lastname = "Doe"
let fullname = firstname + " " + lastname
// template strings
// backtick(`)
console.log(`hello, ${firstname} ${lastname}`);

let person = {
    name: "Krisztián",
    age: 20,
    isStudent: true
}
console.log(person.isStudent);
console.log(person.address);

//boolean
console.log("\nBOOL")
console.log(typeof true);
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(1));

