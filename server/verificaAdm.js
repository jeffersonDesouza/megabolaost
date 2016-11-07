function verificaAdm(idUser){
    //Se não logado return false
    if(!Meteor.users.findOne({'_id':idUser})){
        return false;
    }

//    let user = Jogadores.find({_id:idUser});
//    return user.isAdm;

    return true;
}


export {verificaAdm};
