Router.configure({
	layoutTemplate: 'ApplicationLayout'
});


Router.route('/', function(){
	this.render('home',{
		to: 'main'
	});
});


    Router.route('/adicionar-jogador',function(){

        if(Meteor.userId()){
            this.render('adicionar_jogador',{
                to: 'main'
            });
        }else{
            this.render('erro');
        }

    });

    Router.route('/lista-jogadores',function(){
        if(Meteor.userId()){
        	this.render('jogadores_lista',{
        		to: 'main'
        	});
        }else{
            this.render('erro');
        }
    })


    Router.route('/salvar-sorteio', function(){
        if(Meteor.userId()){
            this.render('salvar_sorteio_template',{
                to:'main'
            });
        }else{
            this.render('erro');
        }
    })

    Router.route('/jogadores/:_id',function(){

        if(Meteor.userId()){
            this.render('jogadores_detalhes', {
        		to:"main",
        		data:function(){
        			//Meteor.subscribe("websites", Session.get("searchValue"));


        			return Jogadores.findOne({_id:this.params._id});
        		}
        	});
        }else{
            this.render('erro');
        }
    });


    Router.route('/jogadores/:_id/edit',function(){

        if(Meteor.userId()){
            this.render('adicionar_jogador', {
                to:"main",
                data:function(){
                    //Meteor.subscribe("websites", Session.get("searchValue"));
                    return Jogadores.findOne(this.params._id);
                }
            });

        }else{
            this.render('erro');
        }
    })
