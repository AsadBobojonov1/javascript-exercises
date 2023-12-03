const prompt = require("prompt-sync")();
let n = Number(prompt(" n ="));
let s = 1;
for (i = 1; i <= n; i++) {
  p = 1;
  for (j = 1; j <= i; j++) {
    p *= j;
  }
  s += 1 / p;
}
console.log(s);
