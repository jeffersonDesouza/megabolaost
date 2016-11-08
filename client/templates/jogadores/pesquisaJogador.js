
Template.pesquisaJogador.onRendered(
    ()=>{
        Session.set("searchFone", "");
    }
);

Template.pesquisaJogador.events({
    "keyup #search": function (e) {
        e.preventDefault();

        let pesquisajogador = $("#searchValue").val();

        if(pesquisajogador){
            Session.set("searchFone", pesquisajogador);
        }else{
            Session.set("searchFone", "");
        }


    }
});
