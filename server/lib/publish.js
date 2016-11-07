Meteor.publish("jogadores", function(searchFone){

    if(this.userId){

        const selector = {};

       selector.telefone = {$regex: `^${searchFone}`, $options: 'i'};

//       return Usuarios.find(selector);

        return Jogadores.find();
    }

    return Jogadores.find({'isPago':'pago'});


});

Meteor.publish("users", function(argument){
    if(this.userId){
        return Meteor.users.find();
    }

});

Meteor.publish("sorteios", function(argument){
    if(this.userId){
        return Sorteios.find();
    }

});

Meteor.publish("numerosSorteados", function(argument){
    if(this.userId){
        return NumerosSorteados.find();
    }

});
