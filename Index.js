/*
0- Obter um usuario
1- Obter numero de telefone do usuario a partir do id
2- Obter o endereço do usuário
*/
const util = require("util");
const obterEndereçoAsync = util.promisify(ObterEndereço);
function ObterUsuario() {
  return new Promise(function resolvepromise(resolve, reject) {
    setTimeout(function () {
      return resolve({
        id: 1,
        Nome: "Vinicius",
        DatadeNascimento: new Date(),
      });
    });
    1000;
  });
}
function ObterTelefone(idUsuario) {
  return new Promise(function resolverpromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        Telefone: "",
        ddd: "",
      });
    }),
      2000;
  });
}
function ObterEndereço(idUsuario) {
  return new Promise(function endereçoPromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        Rua: "Dos bobos",
        Bairro: "Doido",
      });
    });
    1000;
  });
}
const usuariopromise = ObterUsuario();
//Para manipular a sucesso chamamos a função .then
//para manipular erros, usamos o .catch
usuariopromise
  .then(function (usuario) {
    //result está apenas atribuindo o ObterTelefone
    return ObterTelefone(usuario.id).then(function resolverTelefone(result) {
      return {
        usuario: {
          Nome: usuario.Nome,
          id: usuario.id,
        },
        telefone: result,
      };
    });
  })
  .then(function (answer) {
    const endereço = obterEndereçoAsync(answer.usuario.id);
    return endereço;
  })
  .then(function (resultado) {
    console.log("resultado", resultado);
  })
  .catch(function (error) {
    console.error("Deu Ruim Aqui jogador");
  });
// ObterUsuario(function resolverUsuario(error, usuario) {
//   if (error) {
//     console.error();
//     "Deu ruim aqui em jogador", error;
//     return;
//   }
//   ObterTelefone(usuario.id, function resolverTelefone(error1, Telefone) {
//     if (error1) {
//       console.error("Deu ruim no telefone meu jogador", error1);
//       return;
//     }
//     ObterEndereço(usuario.id, function ResolverEndereço(error2, Endereço) {
//       if (error2) {
//         console.error("Deu ruim no endereço em parceiro", error2);
//         return;
//       }
//       console.log(`
//       usuário: ${usuario.Nome}
//       endereço: ${Endereço.Bairro}, Rua: ${Endereço.Rua}
//       telefone: (${Telefone.ddd}) ${Telefone.Telefone}`);
//     });
//   });
// });
