/*
0- Obter um usuario
1- Obter numero de telefone do usuario a partir do id
2- Obter o endereço do usuário
*/
function ObterUsuario(callback) {
  setTimeout(function () {
    return callback(null, {
      id: 1,
      Nome: "Vinicius",
      DatadeNascimento: new Date(),
    });
  });
  1000;
}
function ObterTelefone(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      Telefone: "",
      ddd: "",
    });
  }),
    2000;
}
function ObterEndereço(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      Rua: "",
      Bairro: "",
    });
  });
  1000;
}

function resolverUsuario(erro, usuario) {
  console.log("usuario", usuario);
}

ObterUsuario(function resolverUsuario(error, usuario) {
  if (error) {
    console.error();
    "Deu ruim aqui em jogador", error;
    return;
  }
  ObterTelefone(usuario.id, function resolverTelefone(error1, Telefone) {
    if (error1) {
      console.error("Deu ruim no telefone meu jogador", error1);
      return;
    }
    ObterEndereço(usuario.id, function ResolverEndereço(error2, Endereço) {
      if (error2) {
        console.error("Deu ruim no endereço em parceiro", error2);
        return;
      }
      console.log(`
      usuário: ${usuario.Nome}
      endereço: ${Endereço.Bairro}, Rua: ${Endereço.Rua}
      telefone: (${Telefone.ddd}) ${Telefone.Telefone}`);
    });
  });
});
