const { promiseHooks } = require("v8");
function getUser() {
  return new Promise(function resolvepromise(resolve, reject) {
    setTimeout(function () {
      return resolve({
        id: 1,
        Nome: "Vinicius",
        BirthDate: new Date(),
      });
    });
    1000;
  });
}

function getNumber(idUser) {
  return new Promise(function resolvepromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        Telefone: 999322427,
        ddd: 21,
      });
    });
    1000;
  });
}
function getLocation(idUser) {
  return new Promise(function resolvepromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        Bairro: "Rio Varzea",
        Rua: "Afonso Mello",
      });
    });
    1000;
  });
}

getAll();
async function getAll() {
  try {
    const usuario = await getUser();
    const resultAll = await Promise.all([
      getNumber(usuario.id),
      getLocation(usuario.id),
    ]);
    const number = resultAll[0];
    const location = resultAll[1];

    console.log(
      `Result: ${usuario.Nome}, ${usuario.id}, 
      (${number.ddd}) ${number.Telefone}, 
      Location:${location.Bairro} e ${location.Rua}`
    );
  } catch (error) {
    console.error("Error rigth here", error);
  }
}
