import baralhos from "./data/baralhos.js";
function adicionarBaralho(titulo) {
    const novo = {
      id: baralhos.length ? baralhos[baralhos.length - 1].id + 1 : 1,
      titulo: titulo
    };
    baralhos.push(novo);
    return novo;
  }
  export default adicionarBaralho