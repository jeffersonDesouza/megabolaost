Router.configure({
	layoutTemplate: 'ApplicationLayout'
});


Router.route('/', function(){

	this.render('navbar', {
		to: 'navbar'
	});

	this.render('numeros_sorteados',{
		to: 'main'
	});
});


Router.route('/adicionar-jogador',function(){
	
	this.render('navbar', {
		to: 'navbar'
	});

	this.render('adicionar_usuario',{
		to: 'main'
	});
});

Router.route('/lista-jogadores',function(){
	
	this.render('navbar', {
		to: 'navbar'
	});

	this.render('jogadores_lista',{
		to: 'main'
	});

})


Router.route('/receber-pagamento',function(){
	
	this.render('navbar', {
		to: 'navbar'
	});

	this.render('receber_pagamento',{
		to: 'main'
	});

})


