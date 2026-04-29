import promptSync from "prompt-sync";
const prompt = promptSync();

import * as baralho from "./services/baralhoService.js";
import * as flashcard from "./services/flashcardService.js";

let opcao;

do {
  console.log("\n===== MENU =====");
  console.log("1 - Criar Baralho");
  console.log("2 - Listar Baralhos");
  console.log("3 - Atualizar Baralho");
  console.log("4 - remover baralho")
 console.log("5 - Criar flashcartd");
  console.log("6- listar flascards");
console.log ("7 - Atalizar flashcard");
console.log ("8 - remover flashcard");
console.log ("9 - Buscar pergunta");
  console.log("0 - Sair");

  opcao = prompt("Escolha: ");

  switch (opcao) {
    case "1":
      const titulo = prompt("Título: ");
      baralho.criarBaralho(titulo);
      break;

    case "2":
      const baralho = prompt("listar baralho:");
      console.log(baralho.listarBaralhos );
      break;

    case "3":
      const pergunta = prompt("Pergunta: ");
      const resposta = prompt("Resposta: ");
      const idBaralho = Number(prompt("ID do Baralho: "));
      flashcard.criarFlashcard(pergunta, resposta, idBaralho);
      break;

    case "4":
      console.log(flashcard.listarFlashcards());
      break;

    case "5":
      const busca = prompt("Digite a pergunta: ");
      console.log(flashcard.buscarPorPergunta(busca));
      break;

    case "6":
      const id = Number(prompt("ID do baralho: "));
      baralho.removerBaralho(id);
      break;
  }

} while (opcao !== "0");