const contatosCollection = require("../model/contatoSchema");

const getAll = (request, response) => {
  // console.log(request.url);
  contatosCollection.find((error,contatos) => {
      if(error){
        return response.status(500).send(error)
      }
      else{
        return response.status(200).send(contatos)
      }
  })
  // response.status(200).send(contatosCollection.model);
};

const add = (request, response) => {
  console.log('passou aqui')
  const contatoDoBody = request.body
  const contato = new contatosCollection(contatoDoBody)

  contato.save((error) => {
    if(error){
      return response.status(400).send(error)
    }
    else{
      return response.status(201).send(contato)
    }
  })
}

// const getById = (request, response) => {
//   const id = request.params.id;
//   response.status(200).send(contatos.find(tarefa => tarefa.id == id));
// };

// const add = (request, response) => {
//   let contato = request.body
//   contato.id = Math.random().toString(36).substr(-8)
//   contatos.model.contatos.push(contato)
//   response.status(200).send(contato)
// }


// function pegarSigno(dataNascimento){
//          const arrData = dataNascimento.split("/")
//          const dia = parseInt(arrData[0])
//          const mes = parseInt(arrData[1]) - 1
//          const ano = parseInt(arrData[2])
         
//          var dataNasc = new Date(ano,mes,dia);
//             console.log(dataNasc);
//          if(dataNasc > new Date(ano,2,21) && dataNasc < new Date(ano,3,20)){
//             return "Aries"
//           }
//           else if(dataNasc > new Date(ano,3,21) && dataNasc < new Date(ano,4,20)){
//           return "Touro"
//           }
//           else if(dataNasc > new Date(ano,4,21) && dataNasc < new Date(ano,5,20)){
//               return "Gêmeos"
//           }
//           else if(dataNasc > new Date(ano,5,21) && dataNasc < new Date(ano,6,20)){
//             return "Câncer"
//           }
//           else if(dataNasc > new Date(ano,6,21) && dataNasc < new Date(ano,7,20)){
//             return "Leão"
//           }
//           else if(dataNasc > new Date(ano,7,21) && dataNasc < new Date(ano,8,20)){
//             return "Virgem"
//           }
//           else if(dataNasc > new Date(ano,8,21) && dataNasc < new Date(ano,9,20)){
//             return "Libra"
//           }
//           else if(dataNasc > new Date(ano,9,21) && dataNasc < new Date(ano,10,20)){
//             return "Escorpião"
//           }
//           else if(dataNasc > new Date(ano,10,21) && dataNasc < new Date(ano,11,20)){
//             return "Sagitário"
//           }
//           else if(dataNasc > new Date(ano,11,21) && dataNasc < new Date(ano,1,20)){
//             return "Capricórnio"
//           }
//           else if(dataNasc > new Date(ano,1,21) && dataNasc < new Date(ano,2,20)){
//             return "Aquário"
//           }
//           else{
//             return "Peixes"
//           }
         
// }


// const adicionaContato = (request, response) => {

//   let dados = request.body
//   let meuBanco = contatos.model.contatos
//   dados.id = Math.random().toString(36).substr(-8)

//   if (dados.nome === undefined || dados.dataNascimento === undefined || dados.celular === undefined) {
//     response.status(400).send("Insira todos os dados solicitados")
//   }
//   else {

//     if (meuBanco.find(dadox => dadox.nome === dados.nome)) {
//       response.status(400).send("Contato já cadastrado")
//     }
//     else {
//       dados.signo = pegarSigno(dados.dataNascimento);
//       console.log(dados);
//       meuBanco.push(dados);
//       response.status(200).send(dados)
//       console.log("Oi " + dados.nome + ", estou feliz que você é do signo de " + dados.signo)
//     }
//   }

// }

module.exports = {
  getAll,
  add
  // adicionaContato
}
