const { ok, deepEqual } = require("assert");
const Database = require("./Database");
const DEFAUT_ITEM_CADASTRAR = {
  nome: "Flash",
  poder: "Speed",
  id: 1,
};
describe("Suite de manipulação de herois", () => {
  it("Deve pesquisar um herói buscando arquivos", async () => {
    const expected = DEFAUT_ITEM_CADASTRAR;
    const [resultado] = await Database.listar(expected.id);
    deepEqual(resultado, expected);
  });
  // it("deve cadastrar um heroi, usando arquivos", async () => {
  //   const expected = DEFAUT_ITEM_CADASTRADO;
  //   ok(null, expected);
  // });
});
