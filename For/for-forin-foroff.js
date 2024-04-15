const service = require("./Services");

async function main() {
  try {
    const result = await service.obterPessoas("a");
    let name = [];

    for (let i = 0; i < result.results.length; i++) {
      const pessoa = result.results[i];
      name.push(pessoa.name);
    }
    for (i in result.results) {
      const pessoa = result.results[i];
      name.push(pessoa.name);
    }
    for (pessoa of result.results) {
      name.push(pessoa.name);
    }
    console.log("name:", name);
  } catch (error) {
    console.error("Deu erro aqui", error);
  }
}
main();
