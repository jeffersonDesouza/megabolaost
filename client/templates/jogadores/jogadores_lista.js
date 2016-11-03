Template.jogadores_lista.helpers({
    jogadores: function(){
        return Jogadores.find({},{nome:1,jogoArray:1});
    },
    estaPago(isPago){
        if(isPago == "pago"){
            return "PAGO";
        }
        return "NÃO PAGO"
    },
    pagoCor(isPago){
        if(isPago == "pago"){
            return "#e0f2f1"
        }
        return "#ff8a80 ";
    }
});

Template.jogadores_lista.events({
    "click #js_salvar_jogador_form": function(event, template){

        let telefone, nome, isPago;
        let jogoArray = new Set();

        telefone = event.target.telefone.value;
        nome = event.target.nome.value;
        isPago = event.target.isPago.value;




        Meteor.call("AddJogador", telefone, nome, isPago,jogoArray, function(error, result){
            if(error){
                console.log("error", error);
            }
            if(result){

                Session.set('jogadoAdicionado', true);

            }
        });

        return false;
    }
});
