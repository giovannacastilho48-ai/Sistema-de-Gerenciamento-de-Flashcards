import promptSync from "prompt-sync";
const prompt = promptSync();

// Importando serviços
import {criarFlashcard, listarFlashcards, atualizarFlashcard, removerFlashcard,buscarPorPergunta} from "./service/flashcardService.js";
import {criarBaralho, listarBaralhos,atualizarBaralho, removerBaralho } from "./service/baralhoService.js";
import flashcards  from "./flashcards.js";
import baralhos from "./baralho.js";
let opcao;

do {
  console.log("\n===== MENU FLASHCARDS =====");
  console.log("1 - Criar Baralho");
  console.log("2 - Listar Baralho");
  console.log("3 - Atualizar Baralho");
  console.log("4 - Remover Baralho");
  console.log("5 - Criar Flashcard");
  console.log("6 - Listar Flashcards");
  console.log("7 - Atualizar Flashcard");
  console.log("8 - Remover Flashcard");
  console.log("9 - Buscar por Pergunta");
  console.log("0 - Sair");

  opcao = prompt("Escolha: ");

  switch (opcao) {

    // ===== BARALHO =====
    case "1":
      const titulo = prompt("Título do baralho: ");
      criarBaralho(titulo);
      console.log("Baralho criado!");
      break;

    case "2":
        const baralho = prompt("listar baralho:");
      console.log(listarBaralhos());
      break;

    case "3":
      const idUpdate = Number(prompt("ID do baralho: "));
      const novoTitulo = prompt("Novo título: ");
      atualizarBaralho(idUpdate, novoTitulo);
      break;

    case "4":
      const idDelete = Number(prompt("ID do baralho: "));
      removerBaralho(idDelete);
      console.log("Baralho removido!");
      break;

    // ===== FLASHCARD =====
    case "5":
      const pergunta = prompt("Pergunta: ");
      const resposta = prompt("Resposta: ");
      const idBaralho = Number(prompt("ID do baralho: "));
      criarFlashcard(pergunta, resposta, idBaralho);
      break;

    case "6":
      console.log(listarFlashcards());
      break;

    case "7":
      const idF = Number(prompt("ID do flashcard: "));
      const novaPergunta = prompt("Nova pergunta: ");
      const novaResposta = prompt("Nova resposta: ");
      atualizarFlashcard(id, novaPergunta, novaResposta);
      break;

    case "8":
      const idRemover = Number(prompt("ID do flashcard: "));
      removerFlashcard(idRemover);
      break;

    // ===== BUSCA =====
    case "9":
      const texto = prompt("Digite parte da pergunta: ");
      console.log(buscarPorPergunta(texto));
      break;

    case "10":
      const idBusca = Number(prompt("ID do baralho: "));
      console.log(buscarPorBaralho(idBusca));
      break;
  }

} while (opcao !== "0");