const { readFile } = require("fs");

const { promisify } = require("util");

const readFileAsync = promisify(readFile);

class Database {
  constructor() {
    this.NOME_ARQUIVO = "herois.json";
  }
  async obterDadosArquivo() {
    const Arquivo = await readFileAsync(this.NOME_ARQUIVO, "utf-8");
    return JSON.parse(Arquivo.toString());
  }
  escreverArquivo() {}
  async listar(id) {
    const dados = await this.obterDadosArquivo();
    const dadosFiltrados = dados.filter((item) => (id ? item.id === id : true));
    return dadosFiltrados;
  }
}

module.exports = new Database();
