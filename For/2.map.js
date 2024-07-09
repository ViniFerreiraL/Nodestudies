const service = require("./Services");

Array.prototype.meuMap = function (callback) {
  let meuNovoArray = [];
  for (let indice = 0; indice <= this.length - 1; indice++) {
    const pessoa = callback(this[indice], indice);
    meuNovoArray.push(pessoa);
  }
  return meuNovoArray;
};

async function main() {
  try {
    const results = await service.obterPessoas("a");
    const names = results.results.meuMap(function (pessoa, indice) {
      return `[${indice}]:${pessoa.name}`;
    });
    console.log("nomes", names);
  } catch (Error) {
    console.log("Error", Error);
  }
}
main();
