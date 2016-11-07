function listarVencedoresPorPontos(pontos){
    return Jogadores.find({pontos:{$eq:pontos}, isPago:'pago'});
}


/*
Meteor.setInterval(function(){
    Session.set("vencedoresMaisPontos", function(){
        return = Jogadores.find({'isVencedor': true});
    });
}, 1000)
*/


Template.vencedores_quadro.helpers({
    temVencedor(){
        let jogador = Jogadores.findOne({'isVencedor': true});


        Session.set('temVencedor', jogador.isVencedor);

        return Session.get('temVencedor');
    },

    vencedoresMAISpontos(){

        return Jogadores.find({'isVencedor': true});

    },

    vencedoresMENOSpontos(){
        if(Session.get('temVencedor')){
            let jogadorComMenosPontos = Jogadores.findOne({}, {sort: {pontos: 1}});

            return listarVencedoresPorPontos(jogadorComMenosPontos.pontos);
        }
    }
});
