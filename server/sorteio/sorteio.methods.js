Meteor.methods({
    AddSorteio:function(sorteio){

//         Sorteios.insert(sorteio);

        Sorteios.insert(sorteio);

        adicionarTodosNumerosSorteado(sorteio);


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

    console.log(id._id);
    console.log(sorteio.numerosSorteados);


    NumerosSorteados.update(
       { _id: id._id },
       { $addToSet: { todosNumerosSorteados: {$each: sorteio.numerosSorteados, $sort:1} } }
    )
}
