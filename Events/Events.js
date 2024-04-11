const EventEmitter = require("events");
class MeuEmissor extends EventEmitter {}

const meuEmissor = new MeuEmissor();
const novoEmissor = "Usuário click";
meuEmissor.on(novoEmissor, function (click) {
  console.log("Entrou um novo usuário", click);
});

meuEmissor.emit(novoEmissor, "Ele clicou na barra de rolagem");
meuEmissor.emit(novoEmissor, "Ele clicou no ok");

// let count = 0;
// setInterval(function () {
//   meuEmissor.emit(novoEmissor, "Ele clicou no ok" + count++);
// }, 1000);

const stdin = process.openStdin();
stdin.addListener("data", function (value) {
  console.log(`Você digitou:${value.toString().trim()}`);
});
