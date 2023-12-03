const prompt = require("prompt-sync")();
let narx = Number(prompt("narx ="));
let kg_lar = Number(prompt("kg_lar ="));
for (let i = 1.2; i <= kg_lar; i += 0.2) {
  console.log(narx * i);
}
