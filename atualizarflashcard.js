import flashcards from "./data/flashcard.js";
function atualizarFlashcard(id, pergunta, resposta) {
    const flashcard = flashcards.find(f => f.id == id);
    if (!flashcard) return null;
  
    flashcard.pergunta = pergunta;
    flashcard.resposta = resposta;
    return flashcard;
  }
  export default atualizarFlashcard