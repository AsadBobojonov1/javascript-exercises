const prompt = require("prompt-sync")();
let n = Number(prompt(" n ="));
let s = 0;
for (i = 1; i <= n; i++) {
  p = 1;
  for (j = 1; j <= i; j++) {
    p *= j;
  }
  s += p;

}
console.log(s);
