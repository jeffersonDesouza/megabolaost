export function AddSorteio(sorteio){

    if(!this.userId || Jogadores.findOne({"isVencedor":true})){
        throw new Meteor.Error(500, 'Já existe vencedor,. não pode adicionar sorteio');
    }

    Sorteios.insert(sorteio);


    adicionarTodosNumerosSorteado(sorteio);


    aferirPontuacaoJogadores(collectionJogadoresPago(), listarTodosNumerosSorteados().todosNumerosSorteados);
}


export function exluirSorteio(sorteioId){

    if(!this.userId){
        throw new Meteor.Error(400, 'Usuário deve esar logado');
    }


        var sorteioDelete = Sorteios.findOne({_id:sorteioId});
        var arrayNumeros = [];

        for(numero  of sorteioDelete.numerosSorteados) {
            arrayNumeros.push(numero);
        }

        NumerosSorteados.update(
            {},
            { $pull: { todosNumerosSorteados: { $in: arrayNumeros} } },
            { multi: true }
        );

        Sorteios.remove({_id:sorteioId});

        sorteiosArray = Sorteios.find().fetch();

        if(!Sorteios.findOne()){

            Jogadores.update(
                {pontos:{$gt:-1}},
                {
                    $set:{pontos:0, isVencedor:false}
                },
                {multi:true}
            );

        }{
            for(sorteio of sorteiosArray) {
                adicionarTodosNumerosSorteado(sorteio);
                aferirPontuacaoJogadores(collectionJogadoresPago(), listarTodosNumerosSorteados().todosNumerosSorteados);
            }
        }



}

export function listarSorteios(){
    return Sorteios.find();
}

export function listarTodosNumerosSorteados(){

    return NumerosSorteados.findOne({}, {todosNumerosSorteados:1});
}


function adicionarTodosNumerosSorteado(sorteio){
    if(Jogadores.findOne({"isVencedor":true})){
        throw new Meteor.Error(500, 'Já existe vencedor,. não pode adicionar sorteio');
    }


    let id = NumerosSorteados.findOne();

    NumerosSorteados.update(
       { _id: id._id },
       {
           $addToSet: { todosNumerosSorteados: {$each: sorteio.numerosSorteados} },
           $set:{ultimaModificacao: new Date()}
       }
    )

    NumerosSorteados.update(
       { _id: id._id },
       { $push: { todosNumerosSorteados: {$each: [], $sort:1} } }
    );

}

function collectionJogadoresPago(){
    //Poderimos baser com uma data de sorteio assim permite escalar o sistema para multisorteios
    return Jogadores.find({"isPago":"pago"},{jogoArray:1});
}



///
function aferirPontuacaoJogadores(collecaoJogadores, numerosSorteados){


    collecaoJogadores.forEach(
		function(value){
			pontuarJogador(value, numerosSorteados);
		}
	);
}

function pontuarJogador(jogador, numerosSorteados){

    pontos = 0;
	jogador.jogoArray.forEach(
		function(value){
			if(isValorPresenteBuscaBinaria(value, numerosSorteados)) {

            pontos++;

                Jogadores.update(
                   { _id: jogador._id },
                   { $set:
                      {
                        'pontos':pontos
                      }
                   }
               );

            };

            if(pontos == 10){
                Jogadores.update(
                    { _id: jogador._id },
                    { $set:
                        {
                            'isVencedor':true,
                        }
                    }
                );
            }

        }

    );


}

function isValorPresenteBuscaBinaria(valorBuscado, vetorValores) {

   let esq, meio, dir;
   esq = 0; dir = vetorValores.length;

   while (esq <= dir) {
      meio = Math.trunc((esq + dir)/2);

      if (vetorValores[meio] == valorBuscado){
	    return true;
      }

      if (vetorValores[meio] < valorBuscado) {
      	esq = meio + 1
      }else{
      	dir = meio - 1;
      }

   }
   return false;
}




Meteor.methods({
    AddSorteio,
    exluirSorteio,
    listarSorteios,
    listarTodosNumerosSorteados
});
