Template.adicionar_jogador.helpers({
    jogadoAdicionado: function(){
        return Session.get("jogadoAdicionado");
    },
    numeros_bolas(){
		bolas_num = [];

		for(let i=1; i<7; i++){
			bolas_num[i] = {
				id: "num_"+i,
				posicao: i,

			}
		}

		return bolas_num;
	},
	valor_escolhido(num_id){

	}

});

Template.adicionar_jogador.events({
    "submit #js_salvar_jogador_form": function(event, template){
        let telefone, nome, isPago;
        let jogoArray = [];

        telefone = event.target.telefone.value;
        nome = event.target.nome.value;
        isPago = event.target.isPago.value;

        let num_1, num_2, num_3, num_4, num_5, num_6;

        jogoArray.push(event.target.num_1.value);
        jogoArray.push(event.target.num_2.value);
        jogoArray.push(event.target.num_3.value);
        jogoArray.push(event.target.num_4.value);
        jogoArray.push(event.target.num_5.value);
        jogoArray.push(event.target.num_6.value);



        Meteor.call("AddJogador", telefone, nome, isPago,jogoArray, function(error, result){
            if(error){
                console.log("error", error);
            }
            if(result){

                Session.set('jogadoAdicionado', true);

            }
        });


        event.target.telefone.value = "";
        event.target.nome.value = "";
        event.target.isPago.value = "";

        event.target.num_1.value = 0;
        event.target.num_2.value = 0;
        event.target.num_3.value = 0;
        event.target.num_4.value = 0;
        event.target.num_5.value = 0;
        event.target.num_6.value = 0;

        return false;
    },
    'change .numero_escolhido': function(event){


		let label_id = 'label_'+$(event.target).attr('id')
		let valor = $(event.target).val()
		$('#'+label_id).text(valor);

	}
});
