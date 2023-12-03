const prompt = require("prompt-sync")();
let n = Number(prompt(" n ="));
let x = Number(prompt(" x="));
let s = 0;
for (let i = 0; i <= n; i++) {
  let p = 1;
  for (let j = 0; j <= i; j++) {
    p *= 2 * j + 1;
  }
  s += (Math.pow(x, 2 * i + 1) * Math.pow(-1, i)) / p;
}
console.log(s);
