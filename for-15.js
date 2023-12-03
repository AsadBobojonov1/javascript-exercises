const prompt = require("prompt-sync")();
let a = Number(prompt(" a ="));
let n = Number(prompt(" n ="));
let p;
for (i = 0; i <= n; i++) {
  p = Math.pow(a, i);
}
console.log(p);
