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

        return Jogadores.findOne({'isVencedor': true}).isVencedor;
        //return Session.get("temVencedorMaisPontos");
    },

    vencedoresMAISpontos(){

        return Jogadores.find({'isVencedor': true});

    },
    vencedoresMENOSpontos(){
        if(Session.get("temVencedorMaisPontos")){
            let vet = Jogadores.findOne({}, {sort: {pontos: 1}});

            return listarVencedoresPorPontos(vet.pontos);
        }
    }

});

Template.vencedores_quadro.events({
    "click #foo": function(event, template){

    }
});
