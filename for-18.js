const prompt = require("prompt-sync")();
let a = Number(prompt("a = "));
let n = Number(prompt("n = "));
let s = 0;
for (i = 0; i <= n; i++) {
  s += (a ** i) * ((-1) ** i);
}
console.log(s);

