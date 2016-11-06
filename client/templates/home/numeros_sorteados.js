
Template.numeros_sorteados.onRendered(()=>{
    $('#tabela-sorteios').slideToggle('slow');
});


Template.numeros_sorteados.helpers({
    todosNumerosSorteados(){
        /*
        Meteor.call("listarTodosNumerosSorteados", function(error, result){
            if(error){
                console.log("error", error);
            }
            if(result){
                Session.set('todosNumerosSorteados', result.todosNumerosSorteados);
            }
        });

        return Session.get('todosNumerosSorteados');
        */
        return NumerosSorteados.findOne({}, {todosNumerosSorteados:1});
    },
    sorteiosLista(){

        Meteor.call("listarSorteios", function(error, result){
            if(error){
                console.log("error", error);
            }
            if(result){

                console.log(result);

                return result;

            }
        });

    }

});

Template.numeros_sorteados.events({
    "click #js-show-hid-sorteios": function(){
        $('#tabela-sorteios').slideToggle('slow');
    }
});
