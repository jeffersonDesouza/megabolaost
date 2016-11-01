import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

    if(!Meteor.users.findOne()){

        var admUser = {
            username: "988157090",
            password: "ira123ieza",
            profile:{
                name:"Neto de Evaldo",
                adm:true

            }
        };

        Accounts.createUser(admUser);
    }

});
