/*
0- Obter um usuario
1- Obter numero de telefone do usuario a partir do id
2- Obter o endereço do usuário
*/
const util = require("util");
const { promiseHooks } = require("v8");
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
        Telefone: "99932-2427",
        ddd: "21",
      });
    }),
      2000;
  });
}
function ObterEndereço(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      Rua: "Ipiranga",
      Bairro: "Taboão",
    });
  });
  1000;
}
main();
async function main() {
  try {
    console.time("medindo - promise");
    const usuario = await ObterUsuario();
    // const telefone = await ObterTelefone(usuario.id);
    // const endereço = await obterEndereçoAsync(usuario.id);
    const result = await Promise.all([
      ObterTelefone(usuario.id),
      obterEndereçoAsync(usuario.id),
    ]);
    const endereço = result[1];
    const telefone = result[0];
    console.log(
      `${usuario.Nome}, (${telefone.ddd}) ${telefone.Telefone}, 
      Rua: ${endereço.Rua} e Bairro: ${endereço.Bairro}`
    );
    console.timeEnd("medindo - promise");
  } catch {
    console.error("Deu erro aqui");
  }
}
// const usuariopromise = ObterUsuario();
//Para manipular a sucesso chamamos a função .then
//para manipular erros, usamos o .catch
// usuariopromise
//   .then(function (usuario) {
//     //result está apenas atribuindo o ObterTelefone
//     return ObterTelefone(usuario.id).then(function resolverTelefone(result) {
//       return {
//         usuario: {
//           Nome: usuario.Nome,
//           id: usuario.id,
//         },
//         telefone: result,
//       };
//     });
//   })
// .then(function (answer) {
//   const endereço = obterEndereçoAsync(answer.usuario.id);
//   return endereço.then(function ResolverEndereço(result) {
//     return {
//       usuario: answer.usuario,
//       telefone: answer.telefone,
//       endereço: result,
//     };
//   });
// })
// .then(function (resultado) {
//   console.log(`Nome ${resultado.usuario.Nome}
//         Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.Telefone}
//         Endereço: Rua: ${resultado.endereço.Rua}, Bairro: ${resultado.endereço.Bairro}`);
// })
// .catch(function (error) {
//   console.error("Deu Ruim Aqui jogador");
// });
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
