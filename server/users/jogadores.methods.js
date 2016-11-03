export function deletarJogador(jogadorId){
    if(!this.userId){
         throw new Meteor.Error(400, 'Usuário deve esar logado');
    }

    Jogadores.remove({_id:jogadorId});

}


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
    },
    deletarJogador
});
