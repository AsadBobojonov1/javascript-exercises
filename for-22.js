const prompt = require("prompt-sync")();
let n = Number(prompt(" n ="));
let x = Number(prompt(" x ="));
let s = 1;
let t;
for (i = 1; i <= n; i++) {
  p = 1;
  for (j = 1; j <= i; j++) {
    p *= j;
  }
  t = x ** i / p;
//   console.log(t);
  s += t;
}
console.log(s);
