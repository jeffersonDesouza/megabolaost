import { Meteor } from 'meteor/meteor';

Jogadores = new Mongo.Collection("jogadores");

Sorteios = new Mongo.Collection("sorteios");

NumerosSorteados = new Mongo.Collection("numerosSorteados");




Meteor.startup(() => {

    if(!Meteor.users.findOne()){

        var user = {
            username: "988157090",
            password: "ira123ieza",
        };

        Accounts.createUser(user);

        var novoJogador = {
            _id: Meteor.users.findOne({},{_id:1}),
            name:"Neto de Evaldo",
            isAdm:true
        };
        //Jogadores.insert(novoJogador);
    }

    if(!NumerosSorteados.findOne()){
        NumerosSorteados.insert({
            'todosNumerosSorteados':[],
            'ultimaModificacao': new Date()
        });

    }



});
