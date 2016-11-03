

Template.adicionar_jogador.helpers({
    jogadoAdicionado(){
        return Session.get("jogadoAdicionado");
    },
    submitPage(){

    },


    numeros_bolas(jogoArray){
        if(!jogoArray){
            jogoArray = [0,0,0,0,0,0,0,0,0,0];
        }


		bolas_num = [];

		for(let i=0; i<(jogoArray.length); i++){
			bolas_num[i] = {
				id: "num_"+i,
				posicao: i,
                htmlNum:
                    `<div class="col s11 range-field">

    					<label>${i+1}º Número</label>

    					<div class="range-field">
    						<input  id="num_${i}" name="num_${i}" class="numero_escolhido" type="range" min="0" max="60" value="${jogoArray[i]}"/>
    					</div>
    				</div>

    				<div class="col s1">
    					<p id="label_${i}" class="prefix">${jogoArray[i]}</p>
    				</div>
                    `

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

        let num_1, num_2, num_3, num_4, num_5, num_6, num_7, num_8, num_9, num_10;

        $(".numero_escolhido").each(function(index){

        });

        jogoArray.push(event.target.num_1.value);
        jogoArray.push(event.target.num_2.value);
        jogoArray.push(event.target.num_3.value);
        jogoArray.push(event.target.num_4.value);
        jogoArray.push(event.target.num_5.value);
        jogoArray.push(event.target.num_6.value);
        jogoArray.push(event.target.num_7.value);
        jogoArray.push(event.target.num_8.value);
        jogoArray.push(event.target.num_9.value);
        jogoArray.push(event.target.num_0.value);




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
        event.target.num_7.value = 0;
        event.target.num_8.value = 0;
        event.target.num_9.value = 0;
        event.target.num_0.value = 0;

        return false;
    },
    'change .numero_escolhido': function(event){


		let label_id = 'label_'+$(event.target).attr('id')
		let valor = $(event.target).val()
		$('#'+label_id).text(valor);

	}
});
