import { Meteor } from 'meteor/meteor';

Jogadores = new Mongo.Collection("jogadores");

Sorteios = new Mongo.Collection("sorteios");

NumerosSorteados = new Mongo.Collection("numerosSorteados");




Meteor.startup(() => {



    if(!Jogadores.findOne()){

        let neto = Meteor.users.findOne({username: "988157090"});

        Jogadores.insert(
            {
                _id: neto._id,
                isAdm:true,

                telefone: neto.username,
                nome: "Neto de Evaldo",
                isPago: 'pago',
                jogoArray:[],
                pontos:0,
                isVencedor: false,
                createAt: new Date()
            }
        );

        Jogadores.insert(
            {
                telefone: 1,
                nome: 'A',
                isPago: 'pago',
                jogoArray:[1,2,3,4,5,6,7,8,9,10],
                pontos:0,
                isVencedor: false,
                createAt: new Date()
            }
        );

        Jogadores.insert(

            {
                telefone: 3,
                nome: 'C',
                isPago: '',
                jogoArray:[1,2,3,4,5,10,20,30,40,50],
                pontos:0,
                isVencedor: false,
                createAt: new Date()
            }
        );

    }


    if(!NumerosSorteados.findOne()){
        NumerosSorteados.insert({
            'todosNumerosSorteados':[],
            'ultimaModificacao': new Date()
        });

    }



});
