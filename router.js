Router.configure({
	layoutTemplate: 'ApplicationLayout'
});


Router.route('/', function(){
	this.render('home',{
		to: 'main'
	});
});


    Router.route('/adicionar-jogador',function(){
        console.log(Meteor.userId());

    	this.render('adicionar_jogador',{
    		to: 'main'
    	});
    });

    Router.route('/lista-jogadores',function(){
    	this.render('jogadores_lista',{
    		to: 'main'
    	});
    })


    Router.route('/salvar-sorteio', function(){
        this.render('salvar_sorteio_template',{
            to:'main'
        })
    })

    Router.route('/jogadores/:_id',function(){

        this.render('jogadores_detalhes', {
    		to:"main",
    		data:function(){
    			//Meteor.subscribe("websites", Session.get("searchValue"));


    			return Jogadores.findOne({_id:this.params._id});
    		}
    	});
    });


    Router.route('/jogadores/:_id/edit',function(){

        this.render('adicionar_jogador', {
    		to:"main",
    		data:function(){
    			//Meteor.subscribe("websites", Session.get("searchValue"));
    			return Jogadores.findOne(this.params._id);
    		}
    	});
    })
