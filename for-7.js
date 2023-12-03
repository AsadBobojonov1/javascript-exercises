const prompt = require("prompt-sync")();
let a = Number(prompt("a ="));
let b = Number(prompt("b ="));
s = 0;
for (let i = a; i <= b; i++) {
  s += i;
}
console.log(s);
