Meteor.methods({
    AddSorteio:function(sorteio){

//         Sorteios.insert(sorteio);

        Sorteios.insert(sorteio);

        adicionarTodosNumerosSorteado(sorteio);

        aferirPontuacaoJogadores();


    },
    listarSorteios:function(){
        return Sorteios.find();
    },
    listarTodosNumerosSorteados: function(){
        return NumerosSorteados.findOne({}, {_id:0, todosNumerosSorteados:1});
    }
});


function adicionarTodosNumerosSorteado(sorteio){
    let id = NumerosSorteados.findOne({}, {_id:1});



    NumerosSorteados.update(
       { _id: id._id },
       {
           $addToSet: { todosNumerosSorteados: {$each: sorteio.numerosSorteados.sort(), $sort:1} },
           $set:{ultimaModificacao: new Date()}
       }
    )
}
function aferirPontuacaoJogadores(){

    let todosJogadores = Jogadores.find({"isPago":"pago"},{jogoArray:1});
    console.log("Jogadores: ", todosJogadores);


}
