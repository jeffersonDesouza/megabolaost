import { Meteor } from 'meteor/meteor';

if(!NumerosSorteados.findOne()){
    NumerosSorteados.insert({
        'todosNumerosSorteados':[],
        'ultimaModificacao': new Date()
    });

}


Meteor.startup(() => {


    if(!Meteor.users.findOne()){

        var user = {
        username: "988157090",
        password: "ira123ieza",
        };

        Accounts.createUser(user);

        let neto = Meteor.users.findOne({username: "988157090"});

        Jogadores.insert(
            {
                _id: neto._id,
                isAdm:true,

                telefone: neto.username,
                nome: "Neto de Evaldo",
                isPago: 'pago',
                jogoArray:[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
                pontos:0,
                isVencedor: false,
                createAt: new Date()
            }
        );        

    }






});
