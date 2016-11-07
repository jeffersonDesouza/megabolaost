
Template.pesquisaJogador.helpers({
    pesquisar(){

    }
});

Template.pesquisaJogador.events({
    "keyup #search": function (e) {
        e.preventDefault();

        let pesquisajogador = $("#searchValue").val();

        if(pesquisajogador){
            Session.set("searchFone", pesquisajogador);            
        }else{
            Session.set("searchFone", undefined);
        }


    }
});
