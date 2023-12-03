const prompt = require("prompt-sync")();
let n = Number(prompt("n ="));
let s = 0;
for (let i = 1; i <= n; i++) {
  s += (1 + i / 10) * Math.pow(-1, i);
}
console.log(s);
