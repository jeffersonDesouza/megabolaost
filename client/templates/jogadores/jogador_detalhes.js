

Template.jogadores_detalhes.helpers({
    jogador: function(){
        return  Jogadores.findOne({_id:data});;
    }
});

Template.jogadores_detalhes.events({
    "click #js-excluir-jogador-botao": function(event, template){

        Jogadores.remove({_id:this._id});

    }
});
