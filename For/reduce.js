const { obterPessoas } = require("./Services");

Array.prototype.MeuRedulce = function (callback, ValorInicial) {
  let ValorFinal = typeof ValorInicial !== undefined ? ValorInicial : this[0];
  for (let index = 0; index <= this.length - 1; index++) {
    ValorFinal = callback(ValorFinal, this[index], this);
  }
  return ValorFinal;
};
async function main() {
  try {
    const { results } = await obterPessoas("a");
    const pesos = results.map((item) => parseInt(item.height));
    console.log("pesos", pesos);
    // const total = pesos.reduce((Anterior, proximo) => {
    //   return Anterior + proximo;
    // });
    const minhaLista = [
      ["Erick", "Wendel"],
      ["NodeBr", "NerdZão"],
    ];
    const total = minhaLista.MeuRedulce((anterior, proximo) => {
      return anterior.concat(proximo);
    }, []);

    console.log("total", total);
  } catch (Error) {
    console.log("Error", Error);
  }
}
main();
