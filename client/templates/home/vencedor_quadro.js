function listarVencedoresPorPontos(pontos){
    return Jogadores.find({pontos:{$eq:pontos}});
}




Template.vencedores_quadro.helpers({
    temVencedor(){
        return true;
        //return Session.get("temVencedorMaisPontos");
    },

    vencedoresMAISpontos: function(){

        let listaVencedores = Jogadores.find({'isVencedor': true});


        if(listaVencedores.length>0){
            console.log("tem");
            Session.set("temVencedorMaisPontos", true);
        }else{

            console.log("Não tem");
            Session.set("temVencedorMaisPontos", false);
        }

        return listaVencedores;

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
