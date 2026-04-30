import flashcards from "./data/flashcard.js";
function buscarPorPergunta(texto) {
    return flashcards.filter(f =>
      f.pergunta.toLowerCase().includes(texto.toLowerCase())
    );
  }
export default buscarPorPergunta  