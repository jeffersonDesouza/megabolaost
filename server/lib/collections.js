
Jogadores = new Mongo.Collection("jogadores");
Jogadores.allow({
    insert: function(){

        if(Sorteios.findOne() || Jogadores.findOne({'isVencedor': true})) return false;

        return true;
    },
    update: function(){
        if(Sorteios.findOne() || Jogadores.findOne({'isVencedor': true})) return false;
        return true;
    },
    remove: function(){
        if(Sorteios.findOne() || Jogadores.findOne({'isVencedor': true})) return false;
        return true;
    }
});

Sorteios = new Mongo.Collection("sorteios");
Sorteios.allow({
    insert: function(){
        if(Sorteios.findOne() || Jogadores.findOne({'isVencedor': true})) return false;
        return true;
    },
    update: function(){
        if(Sorteios.findOne() || Jogadores.findOne({'isVencedor': true})) return false;
        return true;
    },
    remove: function(){
        if(Sorteios.findOne() || Jogadores.findOne({'isVencedor': true})) return false;
        return true;
    }
});

NumerosSorteados = new Mongo.Collection("numerosSorteados");
NumerosSorteados.allow({
    insert: function(){
        if(Sorteios.findOne() || Jogadores.findOne({'isVencedor': true})) return false;
        return true;
    },
    update: function(){
        if(Sorteios.findOne() || Jogadores.findOne({'isVencedor': true})) return false;
        return true;
    },
    remove: function(){
        if(Sorteios.findOne() || Jogadores.findOne({'isVencedor': true})) return false;
        return true;
    }
});
