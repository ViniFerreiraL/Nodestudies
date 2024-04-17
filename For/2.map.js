const service = require("./Services");
Array.prototype.MeuMap = function (callback) {
  const novoArrayMapeado = [];
  for (let indicide = 1; indicide <= this.length - 1; indicide++) {
    const mapeado = callback(this[indicide], indicide);
    novoArrayMapeado.push(mapeado);
  }
  return novoArrayMapeado;
};
async function main() {
  try {
    //Esse results esta pegando os dados do service
    const results = await service.obterPessoas("a");
    // //Aqui crio uma array vazia pra implemntar os nomes dentro dela
    // const names = [];
    // results.results.forEach(function (item) {
    //   //Esse name.push pega cada nome do array list
    //   names.push(item.name);
    // });
    // const names = results.results.map(function (pessoa) {
    //   return pessoa.name;
    // });
    // const names = results.results.map((pessoa) => pessoa.name);
    const names = results.results.MeuMap(function (pessoa, indicide) {
      return [`${indicide}: ${pessoa.name}`];
    });
    console.log("names:", names);
  } catch (error) {
    console.error("error", error);
  }
}
main();
