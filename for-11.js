const prompt = require("prompt-sync")();
let n = Number(prompt(" n ="));
let s = 0;
for (let i = 0; i <= n; i++) {
  s += (n + i) ** 2;
}
console.log(s);
