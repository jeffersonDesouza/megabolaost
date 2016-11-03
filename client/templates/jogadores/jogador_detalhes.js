

Template.jogadores_detalhes.helpers({
    jogador: function(){
        return  Jogadores.findOne({_id:data});;
    }
});

Template.jogadores_detalhes.events({
    "click #js-excluir-jogador-botao": function(event, template){

        Meteor.call('deletarJogador', this._id, function(err, result){
            if(err){
                console.log(err);
            }
            if(result){
                console.log(result);
            }
        });


    }
});
