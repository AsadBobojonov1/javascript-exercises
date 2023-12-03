const prompt = require("prompt-sync")();
let a = Number(prompt(" a ="));
let n = Number(prompt(" n ="));
for (i = 0; i <= n; i++) {
  let p = a ** i;
  console.log(p);
}
