Meteor.methods({
    AddJogador:function(telefone, nome, isPago,jogoArray){

        if(Meteor.userId()){

            let jogador = {
                'telefone': telefone,
                'nome': nome,
                'isPago': isPago,
                'jogoArray': jogoArray
            }

            Jogadores.insert(jogador);
        }
    }
});
