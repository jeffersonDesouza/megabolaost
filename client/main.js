import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';



Template.adicionar_jogador.helpers({
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
	'change .numero_escolhido': function(event){


		let label_id = 'label_'+$(event.target).attr('id')
		let valor = $(event.target).val()
		$('#'+label_id).text(valor);

	}
});



/*
Session.set('bolas', function(){
	bolas = [];

	for(let i=1; i<61; i++){
		bolas[i] = {
			'numero': i,
			'disabled': ''
		}
	}
});

console.log(Session.get('bolas'));


  Template.adicionar_jogador.helpers({
    bolas(){
		return Session.get('bolas');
	}
  });


Template.adicionar_jogador.events({
	'click .botao_teclado'(event){
		console.log($(this).html());
	}
});


*/
