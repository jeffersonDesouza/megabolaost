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

	this.render('adicionar_jogador',{
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


Router.route('/jogadores/:_id',function(){
    this.render('navbar', {
		to: 'navbar'
	});

    this.render('jogadores_detalhes', {
		to:"main",
		data:function(){
			//Meteor.subscribe("websites", Session.get("searchValue"));


			return Jogadores.findOne({_id:this.params._id});
		}
	});
});


Router.route('/jogadores/:_id/edit',function(){
    this.render('navbar', {
		to: 'navbar'
	});

    this.render('adicionar_jogador', {
		to:"main",
		data:function(){
			//Meteor.subscribe("websites", Session.get("searchValue"));
			return Jogadores.findOne(this.params._id);
		}
	});
})
