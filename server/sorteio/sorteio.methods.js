Meteor.methods({
    AddSorteio:function(sorteio){

//         Sorteios.insert(sorteio);

        Sorteios.insert(sorteio);


    },
    listarSorteios:function(){
        return Sorteios.find();
    }
});
