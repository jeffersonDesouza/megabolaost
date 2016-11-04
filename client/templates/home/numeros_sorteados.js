
Template.numeros_sorteados.onRendered(()=>{
    $('#tabela-sorteios').slideToggle('slow');
});


Template.numeros_sorteados.helpers({
    todosNumerosSorteados(){
        Meteor.call("listarTodosNumerosSorteados", function(error, result){
            if(error){
                console.log("error", error);
            }
            if(result){
                console.log("resultado", result.todosNumerosSorteados);

                Session.set('todosNumerosSorteados',result.todosNumerosSorteados.sort());
            }
        });

        return Session.get('todosNumerosSorteados');
    },
    sorteiosLista(){

        /*Meteor.call("listarSorteios", function(error, result){
            if(error){
                console.log("error", error);
            }
            if(result){

                console.log(result);

                return result;

            }
        });*/

        return Sorteios.find();

    }

});

Template.numeros_sorteados.events({
    "click #js-show-hid-sorteios": function(){
        $('#tabela-sorteios').slideToggle('slow');
    }
});
