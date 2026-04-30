import flashcards from "./data/flashcard.js";
import baralhos from "./data/baralhos.js";

function adicionarFlashcard(pergunta, resposta, idBaralho) {
    const existe = baralhos.some(b => b.id == idBaralho);
    if (!existe) {
      console.log("Baralho não existe.");
      return null;
    }
  
    const novo = {
      id: flashcards.length ? flashcards[flashcards.length - 1].id + 1 : 1,
      pergunta,
      resposta,
      idBaralho
    };
  
    flashcards.push(novo);
    return novo;
  }
export default adicionarFlashcard  