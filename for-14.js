const prompt = require("prompt-sync")();
let n = Number(prompt(" n ="));
s = 0;
for (let i = 1; i <= n; i++) {
  s += 2 * i - 1;
}
console.log(s);
