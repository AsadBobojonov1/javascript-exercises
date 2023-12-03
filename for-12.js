const prompt = require("prompt-sync")();
let n = Number(prompt("n ="));
let res;
let p = 1;
for (let i = 1; i <= n; i++) {
  res = i / 10 + 1;
  p *= res;
}
console.log(p);
