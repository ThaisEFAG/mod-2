function manipObject() {
  const pessoasMaior = pessoas.filter((pessoa) => pessoa.idade >= 18);
  return pessoasMaior;
}

const pessoas = [
  {
    nome: "Thaís Gonçalves",
    idade: 32,
  },
  {
    nome: "Neuza Farias",
    idade: 61,
  },
  {
    nome: "Talita Cristina",
    idade: 30,
  },
  {
    nome: "Milene Lopes",
    idade: 23,
  },
  {
    nome: "Aliccia Fonseca",
    idade: 6,
  },
];

// const manipEnd = manipObject();
console.log(manipObject());

// Decdlarando arrays
// const mulherMaravilha = "outraMulher maravilha";

// let filmes = [mulherMaravilha, "brancaNeve", "cinderela"];
// let numeros = new Array(1, 2, 3, 4, 5);
// console.log(filmes);
// console.log(numeros);

// console.log(filmes[0]);

// //acessando elementos do array

// const [filmeUm, filmeDois, filmeTres, filmeQuatro] = filmes;
// console.log(filmes[3]);

// // modificando elementos do array
// filmes[1] = "brancade neve e os sete anões";
// console.log(filmes);

// // comprimento do array
// console.log(filmes.length);

// // O método push adiciona um elemento no final do array
// filmes.push("Corra que o pestinha vem ai");
// console.log(filmes);

// // O metodo unshift adiciona um elemento no inicio do array
// filmes.unshift("Rocky");
// console.log(filmes);

// // O metodo pop remove o ultimo elemento do array
// let ultimoFilme = filmes.pop();
// console.log(ultimoFilme);

// //o metodo shift remove o primeiro elemento do array
// let primeiroFilme = filmes.shift();
// console.log(primeiroFilme);
// console.log(filmes);

// // array map

// const arrMap = numeros.map((numero, indice) => {
//   return indice + numero * 2;
// });
// console.log(arrMap);

// // retonando array com os valores  validações boleanas
// const numerosPares = numeros.filter((numero) => {
//   return numero % 2 == 0;
//     // return numero % 2 === 0 ? true : false;
// });
// console.log(numerosPares);

// function executarOperacao(a, b, operacao) {
//   return operacao(a, b);
// }

// function soma(x, y) {
//   return x + y;
// }

// function multiplicacao(x, y) {
//   return x * y;
// }

// console.log(executarOperacao(10, 5, soma));
// console.log(executarOperacao(25, 3, multiplicacao));

// function criarSaudacao(saudacao) {
//   return function (nome) {
//     return `${saudacao} ${nome}`;
//   };
// }

// const saudacaoOla = criarSaudacao("ola");
// console.log(saudacaoOla("Thaís"));

// function contador() {
//   let contagem = 0;
//   return function () {
//     contagem += 1;
//     return contagem;
//   };
// }
// // não muda o visualViewport, muda somente o estado. por isso é const
// const incrementar = contador();
// const qualquerCoisa = incrementar();
// // console.log(incrementar())
// for (let index = 0; index < 10; index++) {
//   console.log(incrementar());
// }

// function criarUsuario(nome) {
//   let senha = "senhaCerta";
//   return {
//     getNome: function () {
//       return nome;
//     },
//     validarSenha: function (tentativa) {
//       return tentativa === senha;
//     },
//   };
// }

// const usuario = criarUsuario("thais");
// console.log(usuario.getNome());
// console.log(usuario.validarSenha("senhaErrada"));
// console.log(usuario.validarSenha("senhaCerta"));

// // exercicio 6?

// function transformarArray(array, transformacao) {
//   const novoArray = array.map((item) => {
//     return transformacao(item);
//   });
//   return novoArray;
// }

// // Operação:
// function dobrar(numero) {
//   return numero * 2;
// }

// let numeros1 = [1, 2, 3, 4, 5, 6];

// console.log(transformarArray(numeros, dobrar));

// // exercicio 7

// function compor(f, g) {
//   return function (x) {
//     return f(g(x));
//   };
// }

// function somar1(x) {
//   return x + 1;
// }

// function multiplicar2(x) {
//   return x * 2;
// }

// let functionComposta = compor(somar1, multiplicar2);
// console.log(functionComposta(5));
