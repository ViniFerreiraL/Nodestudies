const { obterPessoas } = require("./Services");
Array.prototype.myFilter = function (callback) {
  const lista = [];
  for (index in this) {
    const item = this[index];
    const result = callback(item, index, this);
    if (!result) continue;
    lista.push(item);
  }
  return lista;
};

async function main() {
  try {
    const { results } = await obterPessoas("a");
    const familialars = results.myFilter((item, index, lista) => {
      console.log(`index: ${index}`, lista.length);
      return item.name.toLowerCase().indexOf("lars") !== -1;
    });

    const names = familialars.map((pessoa) => pessoa.name);
    console.log(names);
  } catch (Error) {
    console.error("Error", Error);
  }
}

main();
