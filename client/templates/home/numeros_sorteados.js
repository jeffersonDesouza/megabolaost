
Template.numeros_sorteados.onRendered(()=>{
    $('#tabela-sorteios').slideToggle('slow');
});


Template.numeros_sorteados.helpers({
    todosNumerosSorteados(){
        return "01 - 02 - 03 - 04 - 05 - 06 - 07 - 08 - 09 - 10 ";
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
