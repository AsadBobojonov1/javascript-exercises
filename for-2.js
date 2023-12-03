const prompt = require("prompt-sync")();
let a = Number(prompt("a ="));
let b = Number(prompt("b ="));
let s = 0;
for (let i = a; i <= b; i++) {
  console.log(i);
  s++;
}
console.log(s);
