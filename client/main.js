import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Jogadores = new Mongo.Collection("jogadores");

Sorteios = new Mongo.Collection("sorteios");

NumerosSorteados = new Mongo.Collection("numerosSorteados");





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
