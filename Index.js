/*
0- Obter um usuario
1- Obter numero de telefone do usuario a partir do id
2- Obter o endereço do usuário
*/
function Obterusuario() {
  setTimeout(function () {
    return {
      id: 1,
      nome: "Vinicius",
      datadeaniversario: new Date(),
    };
  }, 1000);
}
function Obtertelefone() {
  setTimeout(function () {
    return {
      telefone: "999322427",
      ddd: 21,
    };
  });
}
function ObeterEndereço() {}

const usuario = Obterusuario();
const telefone = Obtertelefone();
console.log("usuario", usuario);
console.log("telefone", telefone);
