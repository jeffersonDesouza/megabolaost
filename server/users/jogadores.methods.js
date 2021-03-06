import {verificaAdm} from '../verificaAdm.js';
import {sortArray} from '../metodosAuxiliares.js';

export function logar(){

    if(!this.userId){
        throw new Meteor.Error('Usuário nao encontrado');
    }

    return true;

}

export function AddJogador(telefone, nome, isPago,jogoArray){


    if(!verificaAdm(this.userId)){
        throw new Meteor.Error(400, 'Usuário deve ser Administrador');
    }

    if(Sorteios.findOne()){
        throw new Meteor.Error(500, 'Os sorteios começaram');
    }

    if(Jogadores.findOne({"isVencedor":true})){
        throw new Meteor.Error(500, 'Já existem vencedores');
    }

    sortArray(jogoArray);

    let jogador = {
        'telefone': telefone,
        'nome': nome,
        'isPago': isPago,
        'jogoArray': jogoArray,
        'pontos': 0,
        'isVencedor': false,
    }

    let jogadorId = Jogadores.findOne({'telefone': jogador.telefone});

    if(jogadorId){
        Jogadores.update({_id:jogadorId._id}, {$set: jogador});

    }else{
        Jogadores.insert(jogador);
    }

}

export function deletarJogador(jogadorId){
    if(!this.userId){
        throw new Meteor.Error(400, 'Usuário deve esar logado');
    }

    Jogadores.remove({_id:jogadorId});
}

export function listarJogadores(jogadorId){

    Jogadores.update(
       {},
       { $push: {jogoArray: {$each: [], $sort:1} } }
    );

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
    listarVencedoresMenosPontos,
    logar

});
