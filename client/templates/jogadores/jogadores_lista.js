Template.jogadores_lista.helpers({
    jogadores: function(){

        if(Session.get('searchFone')){

            ///return Jogadores.find({telefone:Session.get('searchFone')});

            const selector = {};
            let searchFone = Session.get('searchFone');

           selector.telefone = {$regex: `^${searchFone}`, $options: 'i'};

           return Jogadores.find(selector);
        }

        return Jogadores.find({}, {sort:{pontos:-1}});
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
    },
    isAdministrador(){
        return Jogadores.findOne({_id:Meteor.userId()}).isAdm;
    },
    isLoggedIn(){
        if(Meteor.userId()){
          return true;
        }
        return false;
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
