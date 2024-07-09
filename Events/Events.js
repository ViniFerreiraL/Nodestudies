// const EventEmitter = require("events");
// class MeuEmissor extends EventEmitter {}

// const meuEmissor = new MeuEmissor();
// const novoEmissor = "Usuário click";
// meuEmissor.on(novoEmissor, function (click) {
//   console.log("Entrou um novo usuário", click);
// });

// meuEmissor.emit(novoEmissor, "Ele clicou na barra de rolagem");
// meuEmissor.emit(novoEmissor, "Ele clicou no ok");

// let count = 0;
// setInterval(function () {
//   meuEmissor.emit(novoEmissor, "Ele clicou no ok" + count++);
// }, 1000);

// const stdin = process.openStdin();
// stdin.addListener("data", function (value) {
//   console.log(`Você digitou:${value.toString().trim()}`);
// });

const Event = require("events");
class Emissor extends Event {}

const Emited = new Emissor();
const newEmited = "Entrou um novo Usuário";

Emited.on(newEmited, function (click) {
  console.log(newEmited, "e clicou", click);
});
Emited.emit(newEmited, "na Barra de rolagem");
Emited.emit(newEmited, "no OK");

const stdin = process.openStdin();
stdin.addListener("data", function (value) {
  console.log(`Você digitou: ${value.toString().trim()}`);
});
