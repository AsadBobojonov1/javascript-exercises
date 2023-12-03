const prompt = require("prompt-sync")();
let n = Number(prompt(" n ="));
let p = 1;
for (i = 1; i <= n; i++) {
  p *= i;
}
console.log(p);
