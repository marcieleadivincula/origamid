let teste = {
  nome: "Pedro",
  idade: 25,
};

function teste(idade) {
  console.log(idade);
  return idade;
}

console.log(teste.idade);

teste.idade = 30;
console.log(teste.idade);

teste = {
  nome: "Pedro",
  idade: 25,
};

console.log(teste.idade);

teste.idade = 30;
console.log(teste.idade);
teste = {
  nome: "Pedro",
  idade: 25,
};
console.log(teste.idade);
