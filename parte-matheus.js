import promptSync from "prompt-sync";
const prompt = promptSync();

import adicionarBaralho from "./adicionarbaralho.js";
import adicionarFlashcard from "./adicionarflashcard.js";
import listarBaralhos from "./listarbaralho.js";
import listarFlashcards from "./listarflashcard.js";
import atualizarBaralho from "./atualizarbaralho.js";
import atualizarFlashcard from "./atualizarflashcard.js";
import removerBaralho from "./removerbaralho.js";
import removerFlashcard from "./removerflashcard.js";
import buscarPorPergunta from "./buscarpergunta.js";
import buscarPorBaralho from "./buscarbaralho.js";

let opcao;

do {
  console.log("\n===== MENU FLASHCARDS =====");
  console.log("1 - Criar Baralho");
  console.log("2 - Listar Baralhos");
  console.log("3 - Atualizar Baralho");
  console.log("4 - Remover Baralho");
  console.log("5 - Criar Flashcard");
  console.log("6 - Listar Flashcards");
  console.log("7 - Atualizar Flashcard");
  console.log("8 - Remover Flashcard");
  console.log("9 - Buscar por Pergunta");
  console.log("10 - Buscar por Baralho");
  console.log("0 - Sair");

  opcao = prompt("Escolha: ");

  switch (opcao) {

    case "1": {
      const titulo = prompt("Título do baralho: ");
      adicionarBaralho(titulo);
      console.log("Baralho criado!");
      break;
    }

    case "2": {
      console.log("\nBaralhos:");
      console.log(listarBaralhos());
      break;
    }

    case "3": {
      const idUpdate = Number(prompt("ID do baralho: "));
      const novoTitulo = prompt("Novo título: ");
      atualizarBaralho(idUpdate, novoTitulo);
      console.log("Baralho atualizado!");
      break;
    }

    case "4": {
      const idDelete = Number(prompt("ID do baralho: "));
      removerBaralho(idDelete);
      console.log("Baralho removido!");
      break;
    }

    case "5": {
      const pergunta = prompt("Pergunta: ");
      const resposta = prompt("Resposta: ");
      const idBaralho = Number(prompt("ID do baralho: "));
      adicionarFlashcard(pergunta, resposta, idBaralho);
      console.log("Flashcard criado!");
      break;
    }

    case "6": {
      console.log("\nFlashcards:");
      console.log(listarFlashcards());
      break;
    }

    case "7": {
      const idF = Number(prompt("ID do flashcard: "));
      const novaPergunta = prompt("Nova pergunta: ");
      const novaResposta = prompt("Nova resposta: ");
      atualizarFlashcard(idF, novaPergunta, novaResposta);
      console.log("Flashcard atualizado!");
      break;
    }

    case "8": {
      const idRemover = Number(prompt("ID do flashcard: "));
      removerFlashcard(idRemover);
      console.log("Flashcard removido!");
      break;
    }

    case "9": {
      const texto = prompt("Digite parte da pergunta: ");
      console.log("\nResultado:");
      console.log(buscarPorPergunta(texto));
      break;
    }

    case "10": {
      const idBusca = Number(prompt("ID do baralho: "));
      console.log("\nResultado:");
      console.log(buscarPorBaralho(idBusca));
      break;
    }

    case "0":
      console.log("Saindo...");
      break;

    default:
      console.log("Opção inválida!");
  }

} while (opcao !== "0");