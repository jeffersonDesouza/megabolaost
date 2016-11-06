function listarVencedoresPorPontos(pontos){
    return Jogadores.find({pontos:{$eq:pontos}});
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

        Session.set('temVencedor', Jogadores.findOne({'isVencedor': true}).isVencedor)

        if(Session.get('temVencedor')){
            return true;
        }
        return false;

        //return Session.get('temVencedor');
        //return Session.get("temVencedorMaisPontos");
    },

    vencedoresMAISpontos(){

        return Jogadores.find({'isVencedor': true});

    },
    vencedoresMENOSpontos(){
        if( Session.get('temVencedor')){
            let jogadorComMenosPontos = Jogadores.findOne({}, {sort: {pontos: 1}});

            return listarVencedoresPorPontos(jogadorComMenosPontos.pontos);
        }
    }

});

Template.vencedores_quadro.events({
    "click #foo": function(event, template){

    }
});
