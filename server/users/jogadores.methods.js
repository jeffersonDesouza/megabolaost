export function deletarJogador(jogadorId){
    if(!this.userId){
         throw new Meteor.Error(400, 'Usuário deve esar logado');
    }

    Jogadores.remove({_id:jogadorId});

}


Meteor.methods({
    AddJogador:function(telefone, nome, isPago,jogoArray){
        if(!this.userId){
             throw new Meteor.Error(400, 'Usuário deve esar logado');
        }

        let jogador = {
            'telefone': telefone,
            'nome': nome,
            'isPago': isPago,
            'jogoArray': jogoArray
        }
            let jogadorId = Jogadores.findOne({'telefone': jogador.telefone},{_id:1});

            if(jogadorId){
                Jogadores.update(jogadorId, {$set: jogador});
                return;
            }

            Jogadores.insert(jogador);




    },
    deletarJogador
});
