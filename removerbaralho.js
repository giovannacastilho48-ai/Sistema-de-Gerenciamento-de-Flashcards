import baralhos from "./data/baralhos.js";
export default function removerBaralho(id) {
  const index = baralhos.findIndex(b => b.id == id);

  if (index === -1) {
    console.log("Baralho não encontrado.");
    return;
  }

  baralhos.splice(index, 1);
  console.log("Baralho removido com sucesso.");
}