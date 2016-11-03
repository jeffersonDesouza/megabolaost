Meteor.methods({
    AddSorteio:function(dataSorteio, numerosSorteados){

         Sorteios.insert({
             'dataSorteio': dataSorteio,
             'numerosSorteados': numerosSorteados
         });

    }
});
