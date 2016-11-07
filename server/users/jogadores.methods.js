import {verificaAdm} from '../verificaAdm.js';



export function AddJogador(telefone, nome, isPago,jogoArray){


    if(!verificaAdm(this.userId)){
        throw new Meteor.Error(400, 'Usuário deve ser Administrador');
    }

    if(Sorteios.findOne({"isVencedor":true})){
        throw new Meteor.Error(500, 'Os sorteios começaram');
    }


    let jogador = {
        'telefone': telefone,
        'nome': nome,
        'isPago': isPago,
        'jogoArray': jogoArray.sort(),
        'pontos': 0
    }
    let jogadorId = Jogadores.findOne({'telefone': jogador.telefone},{_id:1});

    if(jogadorId){
        Jogadores.update(jogadorId, {$set: jogador});
        return;
    }

    Jogadores.insert(jogador);
}

export function deletarJogador(jogadorId){
    if(!this.userId){
        throw new Meteor.Error(400, 'Usuário deve esar logado');
    }

    Jogadores.remove({_id:jogadorId});
}

export function listarJogadores(jogadorId){

    Jogadores.find();
}

export function listarVencedoresMaisPontos(argument){

    return Jogadores.find({pontos:{$eq:10}});
}

export function listarVencedoresMenosPontos(){

    let jogadores = Jogadores.find({}, {$sort: {pontos:1}})

    let menor = jogadores[0];

    return Jogadores.find({pontos:{$eq:menor.pontos}});
}


Meteor.methods({
    AddJogador,
    deletarJogador,
    listarJogadores,
    listarVencedoresMaisPontos,
    listarVencedoresMenosPontos

});
