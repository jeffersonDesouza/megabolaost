
Template.numeros_sorteados.onRendered(()=>{
    $('#tabela-sorteios').slideToggle('slow');
});


Template.numeros_sorteados.helpers({
    todosNumerosSorteados(){
        
        return NumerosSorteados.findOne({}, {todosNumerosSorteados:1});
    },
    sorteiosLista(){

        return Sorteios.find();

    }

});

Template.numeros_sorteados.events({
    "click #js-show-hid-sorteios": function(){
        $('#tabela-sorteios').slideToggle('slow');
    }
});
