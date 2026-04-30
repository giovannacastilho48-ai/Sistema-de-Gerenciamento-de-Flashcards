import promptSync from "prompt-sync";
const prompt = promptSync();

let baralhos = [
  { id: 1, titulo: "JavaScript" },
  { id: 2, titulo: "Matemática" }
];

let flashcards = [
  { id: 1, pergunta: "O que é uma variável?", resposta: "Um espaço de memória.", idBaralho: 1 },
  { id: 2, pergunta: "Quanto é 1 + 1?", resposta: "2", idBaralho: 2 }
];

function adicionarBaralho(titulo) {
  const novo = {
    id: baralhos.length ? baralhos[baralhos.length - 1].id + 1 : 1,
    titulo: titulo
  };
  baralhos.push(novo);
  return novo;
}


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

function listarBaralhos() {
  return baralhos;
}

function listarFlashcards() {
  return flashcards;
}

function listarPorBaralho(idBaralho) {
  return flashcards.filter(f => f.idBaralho == idBaralho);
}

function atualizarBaralho(id, novoTitulo) {
  const baralho = baralhos.find(b => b.id == id);
  if (!baralho) return null;

  baralho.titulo = novoTitulo;
  return baralho;
}

function atualizarFlashcard(id, pergunta, resposta) {
  const flashcard = flashcards.find(f => f.id == id);
  if (!flashcard) return null;

  flashcard.pergunta = pergunta;
  flashcard.resposta = resposta;
  return flashcard;
}

function removerBaralho(id) {
  const index = baralhos.findIndex(b => b.id == id);
  if (index === -1) return false;

  for (let i = flashcards.length - 1; i >= 0; i--) {
    if (flashcards[i].idBaralho == id) {
      flashcards.splice(i, 1);
    }
  }

  baralhos.splice(index, 1);
  return true;
}

function removerFlashcard(id) {
  const index = flashcards.findIndex(f => f.id == id);
  if (index === -1) return false;

  flashcards.splice(index, 1);
  return true;
}

function buscarPorPergunta(texto) {
  return flashcards.filter(f =>
    f.pergunta.toLowerCase().includes(texto.toLowerCase())
  );
}

function buscarPorBaralho(idBaralho) {
  return flashcards.filter(f => f.idBaralho == idBaralho);
}

let opcao;

do {
  console.log(`
1 - Adicionar Baralho 
2 - Listar Baralhos
3 - Atualizar Baralho
4 - Remover Baralho
5 - Adicionar Flashcard
6 - Listar Flashcards
7 - Listar Flashcards por Baralho
8 - Atualizar Flashcard
9 - Remover Flashcard
10 - Buscar por Pergunta
11 - Buscar por Baralho
0 - Sair
`);

  opcao = prompt("Escolha: ");

  switch (opcao) {
    case "1":
      console.log(adicionarBaralho(prompt("Titulo: ")));
      break;

    case "2":
      console.log(listarBaralhos());
      break;

    case "3":
      console.log(atualizarBaralho(
        prompt("ID: "),
        prompt("Novo título: ")
      ));
      break;

    case "4":
      console.log(removerBaralho(prompt("ID: ")));
      break;

    case "5":
      console.log(adicionarFlashcard(
        prompt("Pergunta: "),
        prompt("Resposta: "),
        prompt("ID Baralho: ")
      ));
      break;

    case "6":
      console.log(listarFlashcards());
      break;

    case "7":
      console.log(listarPorBaralho(prompt("ID Baralho: ")));
      break;

    case "8":
      console.log(atualizarFlashcard(
        prompt("ID: "),
        prompt("Nova pergunta: "),
        prompt("Nova resposta: ")
      ));
      break;

    case "9":
      console.log(removerFlashcard(prompt("ID: ")));
      break;

    case "10":
      console.log(buscarPorPergunta(prompt("Texto: ")));
      break;

    case "11":
      console.log(buscarPorBaralho(prompt("ID Baralho: ")));
      break;
  }

} while (opcao !== "0");