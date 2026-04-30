import flashcards from "./data/flashcard.js";
function removerFlashcard(id) {
    const index = flashcards.findIndex(f => f.id == id);
    if (index === -1) return false;
  
    flashcards.splice(index, 1);
    return true;
  }
  export default removerFlashcard