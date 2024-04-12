const service = require("./Services");

async function main() {
  try {
    const result = await service.obterPessoas("a");
    const name = [];
    console.time("for");
    for (let i = 0; i <= result.results.lenght; i++) {
      const pessoa = result.results[i];
      name.push(pessoa.name);
    }
    console.timeEnd("for");
    //////////////////////////////////////////////////////////
    console.time("forin");
    for (i in result.results) {
      const pessoa = result.results[i];
      name.push(pessoa.name);
    }
    console.timeEnd("forin");
    ///////////////////////////////////////////////////////////

    console.time("ForOF");
    for (pessoa of result.results) {
      name.push(pessoa.name);
    }
    console.timeEnd("ForOF");
    console.log("name", name);
  } catch (error) {
    console.error("Deu erro aqui", error);
  }
}
main();
