Meteor.publish("jogadores", function(argument){

    if(this.userId){
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
        return Sorteios.find();
});

Meteor.publish("numerosSorteados", function(argument){
        return NumerosSorteados.find();
});
