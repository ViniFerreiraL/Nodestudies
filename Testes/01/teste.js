const assert = require("assert");
const { obterPessoas } = require("./Service");
const nock = require("nock");

describe("Star-Wars tests", function () {
  this.beforeEach(() => {
    const response = {
      name: "R2-D2",
      height: "96",
      mass: "32",
      hair_color: "n/a",
      skin_color: "white, blue",
      eye_color: "red",
      birth_year: "33BBY",
      gender: "n/a",
      homeworld: "https://swapi.dev/api/planets/8/",
      vehicles: [],
      starships: [],
      created: "2014-12-10T15:11:50.376000Z",
      edited: "2014-12-20T21:17:50.311000Z",
      url: "https://swapi.dev/api/people/3/",
    };
    nock(`https://swapi.co/api/people`)
      .get(`/?search=r2-d2&format=json`)
      .reply(200, response);
  });
  it("Deve encontrar o R2-D2 com o formato correto", async () => {
    const expected = [{ nome: "R2-D2", peso: "96" }];
    const nomebase = "r2-d2";
    const results = await obterPessoas(nomebase);
    assert.deepEqual(results, expected); //quando colocamos assert pedimos assessões
  });
});
