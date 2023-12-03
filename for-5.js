const prompt = require("prompt-sync")();
let narx = Number(prompt("narx ="));
let kg_lar = Number(prompt("kg_lar ="));
for (let i = 0.1; i <= kg_lar; i = i + 0.1) {
  console.log(narx * i);
}
