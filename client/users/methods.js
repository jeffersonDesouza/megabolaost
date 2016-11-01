export function logar(username, password){

    if(this.userId){
        throw new Meteor.Error('voce já está logado');
    }
    Meteor.loginWithPassword(username, password);

}


Meteor.methods({
  logar
});
