const prompt = require("prompt-sync")();
let a = Number(prompt("a = "));
let n = Number(prompt("n = "));
let s = 0;
for (i = 0; i <= n; i++) {
  let p = a ** i;
  s += p;
}
console.log(s);
