import baralhos from "./data/baralhos.js";
function atualizarBaralho(id, novoTitulo) {
    const baralho = baralhos.find(b => b.id == id);
    if (!baralho) return null;
  
    baralho.titulo = novoTitulo;
    return baralho;
  }
export default atualizarBaralho  