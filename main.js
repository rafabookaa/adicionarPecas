let categoria;
let pecas1 = [];
let pecas2 = [];

janelaInicial = confirm(`Clique OK para cadastrar peças`);

if (janelaInicial == true) {
  pergunta();
}

function pergunta() {
  let itensPecas1 = prompt(
    "Quantos itens deseja adicionar ao Código de Peças 1 ?"
  );
  let itensPecas2 = prompt(
    "Quantos itens deseja adicionar ao Código de peças 2 ?"
  );

  for (let i = 0; i < itensPecas1; i++) {
    let valoresPecasUm = prompt("Entre com o valor no codigo de peças 1:");
    let emDecimalUm = parseFloat(valoresPecasUm);
    pecas1.push(emDecimalUm);
  }

  for (let i = 0; i < itensPecas2; i++) {
    let valoresPecasDois = prompt("Entre com o valor no codigo de peças 2:");
    let emDecimalDois = parseFloat(valoresPecasDois);
    pecas2.push(emDecimalDois);
  }
}

function adicionaItem() {
  let soma1 = 0;
  for (let i = 0; i < pecas1.length; i++) {
    soma1 += pecas1[i];
  }

  let soma2 = 0;
  for (let i = 0; i < pecas2.length; i++) {
    console.log(pecas2[i]);
    soma2 += pecas2[i];
  }

  let valorASerPago = soma1 + soma2;

  alert("O valor a ser pago é de R$ " + valorASerPago.toFixed(2));
}

let button = document.querySelector("button");
button.onclick = adicionaItem;
