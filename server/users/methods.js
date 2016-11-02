export function salvarJogador(userId, telefone, jogo){
    if(!this.userId){
        throw new Meteor.Error('voce deve está logado para adicionar jogadores');
    }

    var admUser = {
        username: "telefone",
        password: "telefone",
        profile:{
            name:"Neto de Evaldo",
            adm:false,
            jogo: jogo
        }
    };

    Accounts.createUser(admUser);
}

export function nomeDoUsuario(){
    if(this.userId){
        Meteor.users.findOne({_id:this.userId()})
    }
    return "";
}

export function isAdm(userId){
    if(this.userId){
        let user = Meteor.users.find({_id:userId},{profile:1,_id:0});
        
        return user;
    }
    return false;
}




Meteor.methods({
  salvarJogador,
  isAdm

});
