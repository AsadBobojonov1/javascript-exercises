const prompt = require("prompt-sync")();
let n = Number(prompt(" n ="));
let x = Number(prompt(" x="));
let s = 0;
for (let i = 0; i <= n; i++) {
  let p = 1;
  for (let j = 1; j <= 2*i; j++) {
    p *= 2 * j;
  }
  s += (Math.pow(-1, i) * Math.pow(x, (2 * i))) / p;
  console.log(s);
}
